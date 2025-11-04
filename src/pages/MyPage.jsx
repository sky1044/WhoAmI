export default function MyPage() {
  return (
    <div className="grid h-full w-full grid-cols-2 grid-rows-2 gap-2 px-8 py-4">
      <section className="rounded-2xl border px-8 py-4">
        <h2>프로필</h2>
        <section>
          <div>프로필 사진 및 닉네임</div>
          <div>최근 접속일</div>
          <div>정리 성향</div>
        </section>
      </section>
      <section className="row-span-2 rounded-2xl border px-8 py-4">
        <h2>게시판</h2>
        <section>
          <div className="flex justify-between">
            <div>유저</div>
            <div>게시글</div>
          </div>
          <div className="flex justify-between">
            <div>유저</div>
            <div>게시글</div>
          </div>
          <div className="flex justify-between">
            <div>유저</div>
            <div>게시글</div>
          </div>
          <div className="flex justify-between">
            <div>유저</div>
            <div>게시글</div>
          </div>
          <div className="flex justify-between">
            <div>유저</div>
            <div>게시글</div>
          </div>
        </section>
      </section>
      <section className="rounded-2xl border px-8 py-4">
        <h2>목표</h2>
        <section className="flex justify-around">
          <section>
            <p>목표1</p>
            <p>목표2</p>
            <p>목표3</p>
            <p>목표4</p>
          </section>
          <section>
            <p>목표1 달성율</p>
            <p>목표2 달성율</p>
            <p>목표3 달성율</p>
            <p>목표4 달성율</p>
          </section>
        </section>
      </section>
    </div>
  );
}
