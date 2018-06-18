import React from 'react'
import Link from 'next/link'

import '../styles.styl'

export default () => (
  <div className="test">
    <Link href="/week1_todolist">
      <a>week1</a>
    </Link>
    <Link href="/week2_filter">
      <a>week2</a>
    </Link>
  </div>
)
