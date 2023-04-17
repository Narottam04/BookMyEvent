export default () => {
  const tableItems = [
    {
      title: "NuHarbor Hackathon",
      description:
        "There are dozens of types of cybersecurity devices with dozens of vendors in each category.  Effective cybersecurity requires a diverse set of data, typically crossing both vendor and device-type boundaries.  The Polyglot challenge is to develop a means of translating data from this highly heterogeneous mix into a single representation so that security management tools can either request or automatically ingest information that is consistently formatted though derived from multiple, heterogeneous, sources.",
      poster: "/5.jpeg",
      start: "01-01-2023",
      end: "10-01-2023",
      seats: "50",
      type: "Offline"
    },
    {
      title: "Introduction to Web",
      description:
        "we will cover the basics of what web development is, the technologies used in web development, and the stages involved in creating websites and web applications. We will explore the fundamental languages used in web development, such as HTML, CSS, and JavaScript, as well as backend languages and databases. ",
      poster: "/6.jpeg",
      start: "01-01-2023",
      end: "01-01-2023",
      seats: "100",
      type: "virtual"
    },
    {
      title: "Blockchain",
      description:
        " We will explore the basics of how blockchain works, including concepts such as blocks, nodes, and cryptography. We will also discuss the advantages and limitations of blockchain technology, and explore real-world examples of blockchain applications such as cryptocurrencies, smart contracts, and supply chain management. By the end of this talk, you will have a solid understanding of blockchain technology, its potential uses, and the impact it can have on various industries.",
      poster: "/4.jpeg",
      start: "01-01-2023",
      end: "01-01-2023",
      seats: "340",
      type: "virtual"
    },
    {
      title: "TIAA pre-Placement Talk",
      description:
        "The Teachers Insurance and Annuity Association of America-College Retirement Equities Fund is a Fortune 100 financial services organization that is the leading provider of financial services in the academic, research, medical, cultural, and governmental fields.",
      poster: "/4.jpeg",
      start: "01-01-2023",
      end: "01-01-2023",
      seats: "150",
      type: "virtual"
    },
    {
      title: "LTIMINDTREE TECH TALK ",
      description:
        " LTIMindtree Subject Matter Expert on Hybrid and Multi Cloud technologies. This is a expert session on cloud computing",
      poster: "/4.jpeg",
      start: "01-01-2023",
      end: "01-01-2023",
      seats: "250",
      type: "virtual"
    }
  ];

  return (
    <div className="max-w-screen-2xl mx-auto px-4 md:px-8 mt-12">
      <div className="max-w-lg">
        <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">Events</h3>
      </div>
      <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
        <table className="w-full table-auto text-sm text-left">
          <thead className="bg-gray-50 text-gray-600 font-medium border-b">
            <tr>
              <th className="py-3 px-6">Title</th>
              <th className="py-3 px-6">Start</th>
              <th className="py-3 px-6">End</th>
              <th className="py-3 px-6">Seats</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 divide-y">
            {tableItems.map((item, idx) => (
              <tr key={idx}>
                <td className="px-6 py-4 whitespace-nowrap">{item.title}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.start}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.end}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.seats}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
