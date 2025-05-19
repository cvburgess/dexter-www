---
title: "Expenses"
layout: layouts/tips.vto
---

# How much does it cost to run Dexter?

The [Dexter Day Planner](/) is an all-in-one app that allows you to manage tasks, calendars, and more in one place.

It's an app I built for myself and [open sourced](https://github.com/cvburgess/dexter-app), but that doesn't mean that running it is free. This is a look into what a "free tier" actually costs, and a look into how sustainable a donation-based "business" model is for those that are curious.

<picture width="2550px" height="1624px">
  <!-- User prefers light mode: -->
  <source srcset="/assets/screenshot-light.png" media="(prefers-color-scheme: light)"/>
  <!-- User prefers dark mode: -->
  <source srcset="/assets/screenshot-dark.png"  media="(prefers-color-scheme: dark)"/>
  <!-- User has no color preference: -->
  <img src="/assets/screenshot-light.png" alt="Dexter app screenshot" width="2550px" height="1624px"/>
</picture>

## Users

***Dexter does not track users*** and what they do in the app and has zero telemetry.

The only usable metric is the number of records in the users (auth) table, but the reality is that most users are probably not monthly active users (or MAUs in industry speak).

**Total Users**: 31

## Expenses

- **Supabase Pro Plan**: $25 per month
- **Supabase Auth**: $0 per month
- **Supabase Compute**: $0 per month
- **Supabase Custom Domain**: $8.44 per month
- **Postmark**: $0 per month
- **iWantMyName Domain Name**: $19.99 per year
- **Apple Developer Program**: $99 per year

Supabase is clearly the bulk of the annual expenditure at $396 per year, while the Postmark free tier is doing the most.

**Total Annual Expenses**: ~$515

## Donations

- **GitHub Sponsors**: $0 per month
- **Patreon Subscriptions**: $5 per month
- **One-time Donations**: $0

**Total Annual Donations**: $60

## Conclusion

Exactly what we all thought: most of the time, donations don't pay the bills.

This is true when I teach yoga classes, and it's true for open source.

Thankfully, Dexter was never meant to be a billion dollar app. It was meant to make my life easier (and maybe the lives of some other folks, too) and it is doing that quite brilliantly - profit be damned.
