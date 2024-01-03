import React from "react"
// Import the original mapper
import MDXComponents from "@theme-original/MDXComponents"
import Tabs from "@theme/Tabs"
import TabItem from "@theme/TabItem"
import SolutionAuthor from "../components/SolutionAuthor"
import TableWrapper from "../components/TableWrapper"

export default {
    // Re-use the default mapping
    ...MDXComponents,
    // custom
    SolutionAuthor,
    TableWrapper,
    Tabs,
    TabItem,
}
