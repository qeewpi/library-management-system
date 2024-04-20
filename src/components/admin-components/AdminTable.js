import React from "react";

const TABLE_HEAD = ["Name", "Username", "Password", "Date Added"];

const TABLE_ROWS = [
  {
    name: "Reyna",
    userName: "admin@one.com",
    passWord: "Stealing sight.",
    dateAdded: "06-02-2020",
  },
  {
    name: "Killjoy",
    userName: "admin@two.com",
    passWord: "Initiated!",
    dateAdded: "08-04-2020",
  },
  {
    name: "Skye",
    userName: "admin@three.com",
    passWord: "Blinding.",
    dateAdded: "10-27-2020",
  },
  {
    name: "Yoru",
    userName: "admin@four.com",
    passWord: "Decoy destroyed.",
    dateAdded: "01-12-2021",
  },
  {
    name: "Astra",
    userName: "admin@five.com",
    passWord: "World divided!",
    dateAdded: "03-02-2021",
  },
];

export function AdminTable() {
  return (
    <div className="overflow-hidden border border-b-0 rounded-xl border-gray-200">
      <table className="table table-lg border-gray-500 border-spacing-y-4">
        {/* head */}
        <thead className="text-sm text-gray-500 bg-gray-100">
          <tr className="border-gray-200 border-b">
            <th className="font-medium border-b p-6">Name</th>
            <th className="font-medium border-b p-6">Username</th>
            <th className="font-medium border-b p-6">Password</th>
            <th className="font-medium border-b p-6">Date Added</th>
          </tr>
        </thead>
        <tbody className="">
          {/* rows */}
          {TABLE_ROWS.map(
            ({ userId, name, userName, passWord, dateAdded }, index) => (
              <tr
                key={name}
                className="text-sm font-medium text-primaryBlack border-gray-200"
              >
                <td className="border-b p-6">{name}</td>
                <td className="border-b p-6">{userName}</td>
                <td className="border-b p-6">{passWord}</td>
                <td className="border-b p-6">{dateAdded}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
}
