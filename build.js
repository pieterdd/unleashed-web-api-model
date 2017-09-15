#!/usr/bin/env node

var jsonrefs = require('json-refs');
var yaml = require('yaml-js');
var fs = require('fs');
var swaggerparser = require('swagger-parser');

function compile() {
    jsonrefs.clearCache();
    var root = yaml.load(fs.readFileSync('swagger.yaml').toString());
    var options = {
        filter: ['relative', 'remote'],
        loaderOptions: {
            processContent: function(res, callback) {
                callback(null, yaml.load(res.text));
            }
        }
    };

    jsonrefs.resolveRefs(root, options)
        .then(function(results) {
            if (!fs.existsSync('output/')) {
                fs.mkdirSync('output/');
            }
            fs.writeFileSync('output/swagger.json', JSON.stringify(results.resolved, null, 2), null, function(err) {
                if (err) {
                    console.error(error.message);
                    process.exit(42);
                }
            });
            validate();
        });
}

function validate() {
    return swaggerparser.validate("output/swagger.json", { validate: { spec: true }, allow: { empty: false}})
        .then(function() {
            fs.writeFileSync('output/errors.json', '{}');
            console.log('All valid.');
        })
        .catch(function(error) {
            fs.writeFileSync('output/errors.json', JSON.stringify(error, null, 2));
            console.error('Please correct the error below.');
            console.error(error.message);
            process.exit(42);
        });
}

compile();