import { Card, Typography } from "@material-tailwind/react";
import React from "react";

const TABLE_HEAD = ["User ID", "Name", "Book", "Status", "Deadline", "Actions"];

const TABLE_ROWS = [
  {
    userId: 1,
    name: "John Michael",
    book: "The Lord of the Rings",
    status: "Borrowed",
    deadline: "2024-04-30",
  },
  {
    userId: 2,
    name: "Alexa Liras",
    book: "To Kill a Mockingbird",
    status: "Returned",
    deadline: "2024-05-15",
  },
  {
    userId: 3,
    name: "Laurent Perrier",
    book: "Pride and Prejudice",
    status: "Borrowed",
    deadline: "2024-05-10",
  },
  {
    userId: 4,
    name: "Michael Levi",
    book: "1984",
    status: "Borrowed",
    deadline: "2024-05-05",
  },
  {
    userId: 5,
    name: "Richard Gran",
    book: "The Great Gatsby",
    status: "Returned",
    deadline: "2024-04-25",
  },
];

export function BooksBorrowedDetails() {
  return (
    <Card className="h-full w-full overflow-scroll shadow-none">
      <table className="w-full min-w-max table-auto text-left text-primaryBlack">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-blue-gray-100 border-b-2 p-6 bg-blue-gray-50/50 text-blue-gray-500"
              >
                <Typography variant="small" className="font-semibold">
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map(({ userId, name, book, status, deadline }, index) => (
            <tr key={name} className="even:bg-blue-gray-50/50">
              <td className="p-6">
                <Typography variant="small" className="font-medium">
                  {userId}
                </Typography>
              </td>
              <td className="p-6">
                <Typography variant="small" className="font-medium">
                  {name}
                </Typography>
              </td>
              <td className="p-6">
                <Typography variant="small" className="font-medium">
                  {book}
                </Typography>
              </td>
              <td className="p-6">
                <Typography variant="small" className="font-medium">
                  {status}
                </Typography>
              </td>
              <td className="p-6">
                <Typography variant="small" className="font-medium">
                  {deadline}
                </Typography>
              </td>
              <td className="p-6 flex flex-row gap-x-3 items-center">
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-blue-900"
                >
                  <path d="M12.3568 9.00462C14.5659 9.00462 16.3568 10.7955 16.3568 13.0046C16.3568 15.2138 14.5659 17.0046 12.3568 17.0046C10.1477 17.0046 8.3568 15.2138 8.3568 13.0046C8.3568 10.7955 10.1477 9.00462 12.3568 9.00462ZM12.3568 10.5046C10.9761 10.5046 9.8568 11.6239 9.8568 13.0046C9.8568 14.3853 10.9761 15.5046 12.3568 15.5046C13.7375 15.5046 14.8568 14.3853 14.8568 13.0046C14.8568 11.6239 13.7375 10.5046 12.3568 10.5046ZM12.3568 5.5C16.9703 5.5 20.9529 8.65001 22.0579 13.0644C22.1585 13.4662 21.9143 13.8735 21.5125 13.9741C21.1106 14.0746 20.7034 13.8305 20.6028 13.4286C19.6639 9.67796 16.2781 7 12.3568 7C8.43374 7 5.0469 9.68026 4.10966 13.4332C4.0093 13.835 3.60216 14.0794 3.20029 13.9791C2.79842 13.8787 2.554 13.4716 2.65436 13.0697C3.75745 8.65272 7.74129 5.5 12.3568 5.5Z" />
                </svg>
                <svg
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-green-900"
                >
                  <path d="M10.3569 0C15.8797 0 20.3569 4.47715 20.3569 10C20.3569 15.5228 15.8797 20 10.3569 20C4.83408 20 0.356934 15.5228 0.356934 10C0.356934 4.47715 4.83408 0 10.3569 0ZM10.3569 1.5C5.66251 1.5 1.85693 5.30558 1.85693 10C1.85693 14.6944 5.66251 18.5 10.3569 18.5C15.0513 18.5 18.8569 14.6944 18.8569 10C18.8569 5.30558 15.0513 1.5 10.3569 1.5ZM9.10693 11.4393L13.5766 6.96967C13.8695 6.67678 14.3443 6.67678 14.6372 6.96967C14.9035 7.23594 14.9277 7.6526 14.7098 7.94621L14.6372 8.0303L9.63723 13.0303C9.37103 13.2966 8.95433 13.3208 8.66073 13.1029L8.57663 13.0303L6.0766 10.5303C5.78371 10.2374 5.78371 9.7626 6.0766 9.4697C6.34287 9.2034 6.75953 9.1792 7.05314 9.3971L7.13726 9.4697L9.10693 11.4393Z" />
                </svg>

                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-red-900"
                >
                  <path d="M5.85693 10C8.8945 10 11.3569 12.4624 11.3569 15.5C11.3569 18.5376 8.8945 21 5.85693 21C2.81936 21 0.356934 18.5376 0.356934 15.5C0.356934 12.4624 2.81936 10 5.85693 10ZM16.1057 0C17.3484 0 18.3557 1.00736 18.3557 2.25V17.75C18.3557 18.9926 17.3484 20 16.1057 20L10.5465 20.0008C10.9729 19.5566 11.3369 19.052 11.6241 18.5011L16.1057 18.5C16.5199 18.5 16.8557 18.1642 16.8557 17.75V2.25C16.8557 1.83579 16.5199 1.5 16.1057 1.5H5.60693C5.19272 1.5 4.85693 1.83579 4.85693 2.25L4.85702 9.0764C4.3338 9.1572 3.83118 9.3004 3.35693 9.4981V2.25C3.35693 1.00736 4.36429 0 5.60693 0H16.1057ZM5.85693 17.88C5.51202 17.88 5.23242 18.1596 5.23242 18.5045C5.23242 18.8494 5.51202 19.129 5.85693 19.129C6.20184 19.129 6.48144 18.8494 6.48144 18.5045C6.48144 18.1596 6.20184 17.88 5.85693 17.88ZM5.85697 12.0031C5.61151 12.0031 5.40737 12.18 5.36503 12.4132L5.35697 12.5031V16.5006L5.36503 16.5905C5.40737 16.8237 5.61151 17.0006 5.85697 17.0006C6.10243 17.0006 6.30658 16.8237 6.34892 16.5905L6.35697 16.5006V12.5031L6.34892 12.4132C6.30658 12.18 6.10243 12.0031 5.85697 12.0031ZM20.1069 13.0019C20.4866 13.0019 20.8004 13.2841 20.8501 13.6502L20.8569 13.7519V15.25C20.8569 15.6297 20.5747 15.9435 20.2087 15.9932L20.1069 16H19.3569V13.0019H20.1069ZM20.1069 9.0019C20.4866 9.0019 20.8004 9.2841 20.8501 9.6502L20.8569 9.7519V11.25C20.8569 11.6297 20.5747 11.9435 20.2087 11.9932L20.1069 12H19.3569V9.0019H20.1069ZM20.1069 5.00194C20.4866 5.00194 20.8004 5.28409 20.8501 5.65017L20.8569 5.75194V7.25C20.8569 7.6297 20.5747 7.94349 20.2087 7.99315L20.1069 8H19.3569V5.00194H20.1069ZM14.6057 3C15.0199 3 15.3557 3.33579 15.3557 3.75V6.2485C15.3557 6.66272 15.0199 6.9985 14.6057 6.9985H7.10693C6.69272 6.9985 6.35693 6.66272 6.35693 6.2485V3.75C6.35693 3.33579 6.69272 3 7.10693 3H14.6057ZM13.8557 4.5H7.85693V5.4985H13.8557V4.5Z" />
                </svg>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}