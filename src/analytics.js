/* analytics.js */
import Analytics from 'analytics'
import googleAnalytics from '@analytics/google-analytics'
// ... whatever analytics provider you use

const analytics = Analytics({
  plugins: [
    googleAnalytics({
      trackingId: process.env.GATSBY_GA_TRACKING_ID
    })
  ]
})

// Set to global so analytics plugin will work with Gatsby
if (typeof window !== 'undefined') {
  window.Analytics = analytics
}

/* export for consumption in your components for .track & .identify calls */
export default analytics