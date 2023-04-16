import { useEffect, useState } from "react";

export default () => {
  const tableItems = [
    {
      name: "Liam James",
      email: "liamjames@example.com",
      position: "Software engineer",
      salary: "$100K"
    },
    {
      name: "Olivia Emma",
      email: "oliviaemma@example.com",
      position: "Product designer",
      salary: "$90K"
    },
    {
      name: "William Benjamin",
      email: "william.benjamin@example.com",
      position: "Front-end developer",
      salary: "$80K"
    },
    {
      name: "Henry Theodore",
      email: "henrytheodore@example.com",
      position: "Laravel engineer",
      salary: "$120K"
    },
    {
      name: "Amelia Elijah",
      email: "amelia.elijah@example.com",
      position: "Open source manager",
      salary: "$75K"
    }
  ];

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/user");
      const result = await response.json();
      console.log(result);
      setData(result);
    };
    fetchData();
  }, []);

  return (
    <div className="max-w-screen-2xl mx-auto px-4 md:px-8 mt-12">
      <div className="max-w-lg">
        <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">All Users</h3>
      </div>
      <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
        <table className="w-full table-auto text-sm text-left">
          <thead className="bg-gray-50 text-gray-600 font-medium border-b">
            <tr>
              <th className="py-3 px-6">id</th>
              <th className="py-3 px-6">Email</th>
              <th className="py-3 px-6">username</th>
              <th className="py-3 px-6">isAdmin</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 divide-y">
            {data &&
              data?.map((item, idx) => (
                <tr key={idx}>
                  <td className="px-6 py-4 whitespace-nowrap">{item.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{`${item.isAdmin}`}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
