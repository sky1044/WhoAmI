import logo from "../assets/logo.png";
import sampleImage from "../assets/ImageSample/imagesample.jpg";
import oldseoul from "../assets/ImageSample/oldseoul.png";
import DraggableScroller from "../components/DraggableScroller";
import { useDraggable } from "../hooks/useDraggable";

const trendingLists = [
  {
    id: 1,
    label: "공간을 꾸미는 방법 9가지",
    category: "인테리어",
    author: "인테리어장인",
  },
  {
    id: 2,
    label: "나는 맥시멀리스트인가",
    category: "인테리어",
    author: "맥시멀리스트",
  },
  {
    id: 3,
    label: "우리집이 인기가 많은 이유",
    category: "인테리어",
    author: "인테리어인싸",
  },
  {
    id: 4,
    label: "당신의 집이 좁아보이는 이유는 바로 ...",
    category: "인테리어",
    author: "공간디자이너웨어이즈잇",
  },
];

const postLists = [
  { id: 1, title: "내가 정리를 잘하는 이유" },
  { id: 2, title: "나만의 공간 정리 방법 3가지" },
  { id: 3, title: "우리 집을 소개합니다." },
  { id: 4, title: "내 물건 어디에 있어? 알려줘 WHEREISIT" },
  { id: 5, title: "연필도 생각해서 사야하는 이유" },
  { id: 6, title: "나는 맥시멀리스트인가" },
  { id: 7, title: "비워내는 방법, 그리고 효과" },
  { id: 8, title: "나는 정리가 싫어요. 1탄" },
  { id: 9, title: "나는 정리가 싫어요. 2탄" },
  { id: 10, title: "템버보드는 용기가 필요한가" },
  { id: 11, title: "귀찮아. 그래도 일어나야지" },
  { id: 12, title: "너네 집은 왜 냄새가 좋아?" },
  { id: 13, title: "공간을 넒게 사용하는 방법" },
  { id: 14, title: "이거 너한테만 알려주는거야." },
];

export default function CommunityPage() {
  return (
    <div className="scrollbar-hidden h-full w-full overflow-y-scroll px-8 py-4">
      <section className="mb-24 flex w-full flex-col">
        <section className="grid w-full grid-cols-12 gap-8">
          <section className="col-span-8 rounded-xl">
            <div
              style={{ backgroundImage: `url(${sampleImage})` }}
              className="relative flex h-full items-end rounded-xl bg-cover bg-center p-4"
            >
              <div className="text-md absolute top-2 left-2 rounded-full bg-violet-400 px-6 py-3 font-medium text-white">
                인기 게시글
              </div>
              <p className="text-xl font-bold text-white text-shadow-lg">
                내가 미니멀리즘을 선택한 이유 4가지
                <br />
                <span className="text-sm font-normal text-gray-400">
                  인테리어
                </span>
              </p>
            </div>
          </section>
          <section className="col-span-4 flex flex-col gap-6 rounded-xl px-4">
            <h1 className="text-xl">10월 4주 인기</h1>
            <section className="grid h-[400px] grid-cols-1 grid-rows-4 gap-y-4">
              {trendingLists.map((list, idx) => (
                <article
                  key={idx}
                  className="flex flex-row justify-between gap-2 rounded-xl border px-4"
                >
                  <div className="py-2">{list.id}</div>
                  <div className="flex h-full grow flex-col gap-1 py-2">
                    <h1 className="text-lg font-medium">{list.label}</h1>
                    <div className="flex flex-col">
                      <p className="text-sm font-normal opacity-50">
                        카테고리{" "}
                        <span className="text-xs">{list.category}</span>
                      </p>
                      <p className="text-sm font-normal opacity-50">
                        by <span className="text-xs">{list.author}</span>
                      </p>
                    </div>
                  </div>
                  <div className="shrink-0 py-2">
                    <img
                      src={sampleImage}
                      alt="logo"
                      className="user-drag-none size-[72px] rounded-xl object-cover"
                    />
                  </div>
                </article>
              ))}
            </section>
          </section>
        </section>
      </section>
      {/* <section className="flex flex-col gap-24">
        <section className="flex flex-col gap-6 bg-black">
          <h1 className="text-xl text-white">최신 게시글</h1>
          <DraggableScroller
            className="scrollbar-hidden h-[400px] gap-4"
            events={useDraggable}
          >
            {postLists.map((list, i) => (
              <article
                style={{ backgroundImage: `url(${oldseoul})` }}
                className="relative w-[500px] shrink-0 cursor-pointer rounded-xl bg-cover bg-center"
                key={i}
              >
                <h1 className="text-2xl font-bold">{i + 1}</h1>
                <div className="absolute right-4 bottom-4 text-right text-3xl font-medium text-white">
                  <p>{list.title}</p>
                  <p className="text-sm font-normal">인테리어 장인</p>
                </div>
              </article>
            ))}
          </DraggableScroller>
        </section>
        <section className="flex flex-col gap-6">
          <h1 className="text-xl">유사 성향 프로필</h1>
          <section className="grid grid-cols-3 gap-x-8">
            <article className="border border-blue-500">1</article>
            <article className="border border-blue-500">2</article>
            <article className="border border-blue-500">3</article>
          </section>
        </section>
        <section className="">
          <DraggableScroller className="scrollbar-hidden snay-x h-20 snap-mandatory overflow-x-scroll whitespace-nowrap">
            <section className="snap-center snap-always">
              <article className="h-10 w-xl bg-white">1</article>
            </section>
            <section className="snap-center snap-always">
              <article className="h-10 w-xl bg-white">1</article>
            </section>
            <section className="snap-center snap-always">
              <article className="h-10 w-xl bg-white">1</article>
            </section>
          </DraggableScroller>
        </section>
      </section> */}
    </div>
  );
}
