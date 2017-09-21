#!/bin/bash
set -ev
if [ "${TRAVIS_BRANCH}" = "master" ]; then
    mkdir "${TRAVIS_BUILD_DIR}/bin"
    cd "${TRAVIS_BUILD_DIR}/bin"
    wget -O dapper.tgz https://github.com/DapperDox/dapperdox/releases/download/v1.1.1/dapperdox-1.1.1.linux-amd64.tgz --no-check-certificate
    tar -zxf dapper.tgz --strip-components=1
    chmod +x dapperdox
fi