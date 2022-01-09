import Layout from "components/layout";
import Link from "next/link";

export default function Homepage() {
  return (
    <Layout>
      <div className="content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
        exercitationem unde ratione voluptates iure corporis aspernatur odit
        possimus optio beatae. Animi labore aut veritatis perferendis sit beatae
        ratione repellat dolorum!
      </div>
      <Link href="/about" passHref>
        <button className="btn btn-secondary btn-sm mt-4">About</button>
      </Link>
    </Layout>
  );
}
