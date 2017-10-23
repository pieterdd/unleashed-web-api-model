Overlay: true

[[description]]
To go live with JIM Mobile we had to take some shortcuts on the Balance output compared to the current offering on Mobile Vikings (V3). This is a list of items currently missing for which we might have a temporary workaround.

- **Topup validity**: No workaround, the absence of a bundle will be the definition of a prepaid subscription that needs a topup to benefit from bonus bundles.
- **Priceplan**: No workaround, but only needed in case you want to add more context towards the prepaid credit you still have. In our own app (Viking App), this is used to generate a VOICE bundle calculated using the national rate for regular traffic. We won't be able to provide this one for now.
- **Missing bundle types**: Currently we seem to be missing some information on how certain bundles will be returned (roaming, package). We'll update the documentation as soon as we have the information.

## Additions

We do have a live entry for **out of bundle cost** on postpaid including the threshold. Every postpaid account can spend more than its pre-configured monthly subscription fee, limited to a certain threshold. Per Customer request, this can be adjusted (raised or lowered) and will be shown in the balance response.

The notion of a **value** bundle is new. When encountering a bundle of this `type`, the `remaining`, `total` and `used` fields will contain EURO content. The **Binge** product for JIM Mobile is configured this way. You can use the value on any other type of choice as long as you've got credit left in this bundle. In the future, we will add the national rates so you could offer a view containing max `sms` or `voice` or `data` volumes you can use given the balance in the bundle.