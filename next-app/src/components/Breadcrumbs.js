import Link from "next/link";

const Breadcrumbs = ({ crumbs }) => {
  const preparedCrumbs = Object.keys(crumbs).map((key) => (
    <li className="-z-10 text-appColor_4">
      <Link href={crumbs[key].link} className="cursor-pointer">
        {crumbs[key].title}
      </Link>
    </li>
  ));
  return (
    <div className="text-sm breadcrumbs flex justify-center mb-7">
      <ul>{preparedCrumbs}</ul>
    </div>
  );
};

export default Breadcrumbs;
