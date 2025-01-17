import { About } from "@/components/shared";
import { Banner } from "@/components/shared/Banner";
import { Categories } from "@/components/shared/Categories";
import { News } from "@/components/shared/News";

export default function Home() {
  return (
    <div>
      <Banner />
      <Categories />
      <About />
      <News />
    </div>
  );
}
