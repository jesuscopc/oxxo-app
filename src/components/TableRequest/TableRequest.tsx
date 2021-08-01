import React from 'react';

const TableRequest = () => {
  return (
    <table className="table-fixed mx-auto my-20 border-2 border-indigo-900">
      <thead>
        <tr>
          <th className="text-center font-bold w-1/2 text-xl p-2">Title</th>
          <th className="w-1/4">Author</th>
          <th>Views</th>
        </tr>
      </thead>
      <tbody>
        <tr className="text-2xl p-6">
          <td className="p-4 text-center">Intro to CSS</td>
          <td>Adam</td>
          <td>858</td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableRequest;
