import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { TableComponent } from '../../lib/components/table/table.component';
import { TableRowComponent } from '../../lib/components/table-row/table-row.component';
import { FormsModule } from '@angular/forms';

const meta: Meta<TableComponent<any>> = {
  title: 'Components/Table',
  component: TableComponent,
  decorators: [
    moduleMetadata({
      imports: [FormsModule],
      declarations: [TableComponent, TableRowComponent]
    })
  ],
  render: (args: TableComponent<any>) => {
    const props = {
      ...args,
    };

    return {
      props,
      template: `
      <div>
      <acc-table
        [ngStyle]="{'margin-left': '10px'}"
        (filteredData)="data = $event"
        [tableHeaders]="tableHeaders"
        [mobileStickyLastColumn]="true"
        [data]="data"
      >
        <tr acc-table-row *ngFor="let person of data">
          <td>{{ person.firstName }}</td>
          <td>{{ person.lastName }}</td>
          <td>{{ person.position }}</td>
          <td>{{ person.dateOfBirth }}</td>
          <td>{{ person.maritalStatus }}</td>
          <ng-template #stickyColumn>
          </ng-template>
        </tr>
      </acc-table>
      </div>

      `
    }
  },
  argTypes: {

  },
};

export default meta;
type Story = StoryObj<TableComponent<any>>;

export const Primary: Story = {
  args: {
    tableHeaders: [

      { title: 'firstName', hasFilter: true, dataKey: 'firstName', sortable: true },
      { title: 'lastName', hasFilter: true, dataKey: 'lastName', sortable: true },
      { title: 'position', hasFilter: true, dataKey: 'position', sortable: true },
      { title: 'dateOfBirth', dataKey: 'dateOfBirth', sortable: true },
      { title: 'dateOfBirth', dataKey: 'maritalStatus', sortable: true }
    ],
    data: [
      {
        "firstName": "John",
        "lastName": "Doe",
        "position": "Software Engineer",
        "dateOfBirth": "1985-06-15",
        "maritalStatus": "Married"
      },
      {
        "firstName": "Alice",
        "lastName": "Smith",
        "position": "Data Analyst",
        "dateOfBirth": "1990-03-25",
        "maritalStatus": "Single"
      },
      {
        "firstName": "Michael",
        "lastName": "Johnson",
        "position": "Marketing Manager",
        "dateOfBirth": "1978-12-10",
        "maritalStatus": "Married"
      },
      {
        "firstName": "Emily",
        "lastName": "Brown",
        "position": "HR Coordinator",
        "dateOfBirth": "1989-09-20",
        "maritalStatus": "Single"
      },
      {
        "firstName": "Daniel",
        "lastName": "Wilson",
        "position": "Financial Analyst",
        "dateOfBirth": "1982-04-30",
        "maritalStatus": "Married"
      },
      {
        "firstName": "Sarah",
        "lastName": "Taylor",
        "position": "Project Manager",
        "dateOfBirth": "1987-07-08",
        "maritalStatus": "Married"
      },
      {
        "firstName": "Matthew",
        "lastName": "Anderson",
        "position": "Sales Representative",
        "dateOfBirth": "1995-01-12",
        "maritalStatus": "Single"
      },
      {
        "firstName": "Jessica",
        "lastName": "Martinez",
        "position": "Customer Service Representative",
        "dateOfBirth": "1992-11-05",
        "maritalStatus": "Married"
      },
      {
        "firstName": "David",
        "lastName": "Garcia",
        "position": "Product Manager",
        "dateOfBirth": "1980-08-18",
        "maritalStatus": "Single"
      },
      {
        "firstName": "Jennifer",
        "lastName": "Lee",
        "position": "Graphic Designer",
        "dateOfBirth": "1993-06-28",
        "maritalStatus": "Single"
      },
      {
        "firstName": "Jessica as Karen",
        "lastName": "Martinez",
        "position": "Customer Service Representative",
        "dateOfBirth": "1992-11-05",
        "maritalStatus": "Married"
      },
      {
        "firstName": "Not David",
        "lastName": "Garcia",
        "position": "Product Manager",
        "dateOfBirth": "1980-08-18",
        "maritalStatus": "Single"
      },
      {
        "firstName": "Lalalee",
        "lastName": "Lee",
        "position": "Graphic Designer",
        "dateOfBirth": "1993-06-28",
        "maritalStatus": "Single"
      }
    ]
  }
};
