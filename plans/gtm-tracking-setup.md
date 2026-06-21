# GTM Tracking Setup - Nha Xe Vu Phu

## GTM container

- Google account used: `haikieudng@gmail.com`
- GTM account: `Nha Xe Vu Phu`
- Web container: `www.xeghepvuphu.com`
- Container ID: `GTM-WGS4WGQG`
- Live version: `Version 2 - Initial tracking foundation`
- Published: `2026-06-17`
- Current live contents: 0 tags, 3 triggers, 4 user-defined data layer variables.

## Repo environment

Set these values locally and in Vercel:

```env
NEXT_PUBLIC_SITE_URL=https://www.xeghepvuphu.com
NEXT_PUBLIC_GTM_ID=GTM-WGS4WGQG
NEXT_PUBLIC_GA4_ID=
NEXT_PUBLIC_GOOGLE_ADS_ID=
NEXT_PUBLIC_GOOGLE_ADS_PHONE_CONVERSION_LABEL=
NEXT_PUBLIC_GOOGLE_ADS_ZALO_CONVERSION_LABEL=
```

`NEXT_PUBLIC_GA4_ID`, `NEXT_PUBLIC_GOOGLE_ADS_ID`, and conversion labels stay empty until the real GA4/Google Ads properties are created.

Vercel status:

- Production: `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_GTM_ID` added.
- Development: `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_GTM_ID` added.
- Preview: Vercel CLI did not accept preview env for the production branch `master`; add later only if using non-production preview branches.

## Website events pushed to dataLayer

The site pushes these events from `src/components/AdsConversionTracker.tsx`:

| Event | Meaning | Primary later? |
|---|---|---|
| `ads_phone_click` | User clicked any `tel:` CTA | Yes |
| `ads_zalo_click` | User clicked any `zalo.me` CTA | Yes |
| `ads_route_click` | User clicked a CTA carrying route data | Secondary |

Payload:

```js
{
  event: "ads_phone_click",
  cta_location: "header",
  route: "xe-ghep-thai-binh-ha-noi",
  page_path: "/",
  href: "tel:0963467577"
}
```

`route` can be missing on generic CTAs such as header/footer/final CTA.

## GTM variables to create

Created Data Layer Variables:

- `DLV - cta_location`
  - Data Layer Variable Name: `cta_location`
- `DLV - route`
  - Data Layer Variable Name: `route`
- `DLV - page_path`
  - Data Layer Variable Name: `page_path`
- `DLV - href`
  - Data Layer Variable Name: `href`

## GTM triggers to create

Created Custom Event triggers:

- `CE - ads_phone_click`
  - Event name: `ads_phone_click`
  - Fires on: All Custom Events
- `CE - ads_zalo_click`
  - Event name: `ads_zalo_click`
  - Fires on: All Custom Events
- `CE - ads_route_click`
  - Event name: `ads_route_click`
  - Fires on: All Custom Events

## Tags to create after GA4/Google Ads accounts exist

GA4:

- `GA4 - Config`
  - Measurement ID: real `G-...`
  - Trigger: Initialization / All Pages
- `GA4 - Event - phone_click`
  - Event name: `phone_click`
  - Trigger: `CE - ads_phone_click`
  - Params: `cta_location`, `route`, `page_path`, `href`
- `GA4 - Event - zalo_click`
  - Event name: `zalo_click`
  - Trigger: `CE - ads_zalo_click`
  - Params: `cta_location`, `route`, `page_path`, `href`
- `GA4 - Event - route_click`
  - Event name: `route_click`
  - Trigger: `CE - ads_route_click`
  - Params: `cta_location`, `route`, `page_path`, `href`

Google Ads:

- `Google Ads - Conversion - Phone Click`
  - Conversion ID: real `AW-...`
  - Conversion label: real phone label
  - Trigger: `CE - ads_phone_click`
- `Google Ads - Conversion - Zalo Click`
  - Conversion ID: real `AW-...`
  - Conversion label: real Zalo label
  - Trigger: `CE - ads_zalo_click`

## Verification checklist

- [ ] Production has `NEXT_PUBLIC_GTM_ID=GTM-WGS4WGQG`
- [ ] View source / Tag Assistant sees GTM container
- [ ] Clicking phone CTA pushes `ads_phone_click`
- [ ] Clicking Zalo CTA pushes `ads_zalo_click`
- [ ] Clicking route card pushes `ads_route_click`
- [ ] GTM Preview sees all three events
- [ ] GA4 DebugView sees phone/zalo/route events after GA4 is connected
- [ ] Google Ads conversion diagnostics sees phone/Zalo conversions after Ads labels are connected
