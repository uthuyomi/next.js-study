import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import Header from "@/component/Header";
import ArchiveItem from "@/pages/ArchiveItem";
import Footer from "@/component/Footer";
import style from "@/styles/archive.module.scss";
import Data from "@/data/data.json";
import { Post } from "@/types/types";

type Props = {
  posts: Post[];
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const url = `${Data.top.wpurl}?_embed&per_page=100`;
  const res = await fetch(url);
  const posts = await res.json();
  return { props: { posts } };
};

const Archive = ({ posts }: Props) => {
  const router = useRouter();
  const { category } = router.query;

  const filteredPosts =
    typeof category === "string"
      ? posts.filter((post) => post.categories?.includes(Number(category)))
      : posts;

  return (
    <>
      <Header nav={Data.top.header.nav} />
      <section className={style.archive}>
        <h2 className={style.heading}>記事一覧</h2>
        <ArchiveItem posts={filteredPosts} noimg={Data.archive.noimg} />
      </section>
      <Footer footer={Data.top.footer} />
    </>
  );
};

export default Archive;
