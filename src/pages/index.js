import * as React from "react"
import { Link } from "gatsby"

const IndexPage = () => (
  <>
    I'm the index page.
    <ul>
      <li>
        <Link to="/ssr-page-200">SSR page with 200 response</Link>
      </li>
      <li>
        <Link to="/ssr-page-404">SSR page with 404 response</Link>
      </li>
    </ul>
  </>
)

export default IndexPage
