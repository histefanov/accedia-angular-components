// import { Meta, Canvas, Controls } from "@storybook/blocks";
// import * as TableStories from "./Table.stories.ts";
// import GithubIcon from "../assets/github-mark.svg";

// <Meta of={TableStories} />

// <style>
//   {`
//     .github-icon {
//       margin-left: 0.25rem;
//     }
//   `}
// </style>

// # Table

// The <strong>Table</strong> component provides a user-friendly way to display tabular data in web applications.
// It allows you to define table headers and populate rows with data efficiently.

// <Canvas of={TableStories.Primary} />

// <Controls />

// ## Functionality

// <ul>
//   <li>
//     The component consists of a table structure with customizable headers and rows.
//   </li>
//   <li>
//     You can define table headers and populate rows with data dynamically. Additionally, you may want to use the provided TableRow component for populating rows.
//   </li>
//   <li>
//     It supports customization of table header text color and background color.
//   </li>
// </ul>

// ## Usage

// To use the <strong>Table</strong> component, you need to render it inside any template within your
// application via the `acc-table` selector and provide the `tableHeaders` property to specify the table headers.
// You can also customize the appearance by setting the `theadColor` and `theadBackgroundColor` properties.

// Here is an example of how you can use the <strong>Table</strong> component in your application:

// ```html
// <acc-table
//   [tableHeaders]="yourTableHeaders"
// >
//   <!-- You can use the provided TableRow component for populating rows -->
//   <tr acc-table-row>
//     <!-- Add your columns here -->
//     <td>...</td>
//     <td>...</td>
//     <td>...</td>
//   </tr>
//   <!-- Add more rows as needed -->
// </acc-table>
// ```

// ## Source code <img className="github-icon" src={GithubIcon} alt="github" width="20"/>

// [Table component](https://github.com/histefanov/accedia-angular-components/tree/main/projects/accedia-angular-components/src/lib/components/table)<br />
