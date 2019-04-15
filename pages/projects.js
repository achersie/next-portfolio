import React from "react"
import Link from "next/link";

const projects = () => {
  return (
    <div>
      <ul>
          <li>
              <h5>Ecommerce App</h5>
              <Link href="https://ecommerce-with-next-redux.herokuapp.com/"><a>Demo</a></Link> <br/>
              <Link href="https://github.com/achersie/ecommerce-next-app"><a>Github</a></Link>
          </li>
          <li>
              <h5>Multi-Step Form</h5>
              <Link href="https://multi-step-form-app.herokuapp.com/"><a>Demo</a></Link> <br/>
              <Link href="https://github.com/achersie/multi-step-form"><a>Github</a></Link>
          </li>
      </ul>
    </div>
  )
}

export default projects
