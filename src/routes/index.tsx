import { createFileRoute } from "@tanstack/react-router";
// Tailwind safelist (keep classes generated for dynamic color tokens):
// bg-brand-purple bg-brand-orange bg-brand-pink bg-brand-green bg-brand-yellow
// text-brand-purple text-brand-orange text-brand-pink text-brand-green text-brand-yellow
// bg-brand-purple/10 bg-brand-orange/10 bg-brand-pink/10 bg-brand-green/10
// bg-brand-purple/15 bg-brand-orange/15 bg-brand-pink/15 bg-brand-green/15
import logo from "../assets/eduplay-logo.ico?url";;

const DOWNLOAD_URL =
  "https://github.com/Tan0807-creat3/EduPlay-Studio/releases/download/v1.0.0-rc2/EduPlay-Studio-v1.0.0-Setup.exe";
const GITHUB_URL = "https://github.com/Tan0807-creat3/EduPlay-Studio/releases";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "EduPlay Studio — Learn. Create. Play." },
      {
        name: "description",
        content:
          "Studio desktop tất cả trong một để tạo trò chơi giáo dục tương tác. Tích hợp AI Edubot, 3 thể loại game, 5 dạng bài tập, xuất web hoặc HTML nhúng PowerPoint.",
      },
      { property: "og:title", content: "EduPlay Studio — Learn. Create. Play." },
      {
        property: "og:description",
        content: "Tạo trò chơi giáo dục tương tác ngay trên máy tính, có AI Edubot hỗ trợ.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Nav />
      <Hero />
      <Trusted />
      <Features />
      <GameTypes />
      <QuestionTypes />
      <ExportModes />
      <Edubot />
      <SystemReq />
      <DownloadCTA />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5">
          <img src={logo} alt="EduPlay Studio" className="h-9 w-9" />
          <span className="font-display font-bold tracking-tight">EDUPLAY STUDIO</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#features" className="hover:text-foreground transition">Tính năng</a>
          <a href="#games" className="hover:text-foreground transition">Thể loại game</a>
          <a href="#edubot" className="hover:text-foreground transition">AI Edubot</a>
          <a href="#requirements" className="hover:text-foreground transition">Yêu cầu</a>
          <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="hover:text-foreground transition">GitHub</a>
        </nav>
        <a
          href={DOWNLOAD_URL}
          className="inline-flex items-center gap-2 rounded-full bg-gradient-brand text-white px-4 py-2 text-sm font-semibold shadow-glow hover:opacity-95 transition"
        >
          Tải xuống
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-brand-purple/20 blur-3xl animate-blob" />
        <div className="absolute top-40 -right-24 h-96 w-96 rounded-full bg-brand-orange/20 blur-3xl animate-blob" style={{ animationDelay: "3s" }} />
      </div>
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-24 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 backdrop-blur px-3 py-1.5 text-xs font-medium text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-brand-green animate-pulse" />
            Đang phát hành • v1.0.0 RC2
          </div>
          <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.02]">
            <span className="text-gradient-brand">Learn.</span><br />
            <span className="text-gradient-brand">Create.</span><br />
            <span className="text-gradient-brand">Play.</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl">
            Studio desktop tất cả trong một để tạo trò chơi giáo dục tương tác — chạy ngay trên
            máy bạn, có AI Edubot chuyên sâu, xuất trực tiếp lên web hoặc nhúng vào PowerPoint.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={DOWNLOAD_URL}
              className="group inline-flex items-center gap-3 rounded-full bg-gradient-brand text-white px-6 py-3.5 font-semibold shadow-glow hover:scale-[1.02] transition"
            >
              <DownloadIcon className="h-5 w-5" />
              Tải EduPlay Studio
              <span className="text-xs opacity-80 font-normal border-l border-white/30 pl-3">Windows • 1GB+</span>
            </a>
            <a
              href={GITHUB_URL}
              target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 font-semibold hover:bg-secondary transition"
            >
              <GithubIcon className="h-5 w-5" />
              Xem trên GitHub
            </a>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            Miễn phí phi thương mại • Phiên bản mới nhất v1.0.0 RC2
          </p>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 bg-gradient-brand opacity-20 blur-3xl rounded-[3rem]" />
          <div className="relative rounded-[2rem] bg-gradient-card shadow-float border border-border overflow-hidden">
            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border bg-background/60">
              <span className="h-3 w-3 rounded-full bg-destructive/70" />
              <span className="h-3 w-3 rounded-full bg-brand-yellow" />
              <span className="h-3 w-3 rounded-full bg-brand-green" />
              <span className="ml-3 text-xs text-muted-foreground">EduPlay Studio</span>
            </div>
            <div className="p-8">
              <div className="text-center">
                <div className="inline-flex items-center gap-2 mb-2">
                  <img src={logo} alt="" className="h-8 w-8" />
                  <span className="font-display font-bold text-lg">EduPlay Studio</span>
                </div>
                <p className="text-3xl font-display font-bold text-gradient-brand">EDUPLAY STUDIO</p>
                <p className="text-xs text-muted-foreground mt-1">Learn. Create. Play.</p>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-3">
                <MockTile color="purple" label="CREATE" cta="Bắt đầu" icon="+" />
                <MockTile color="green" label="EDIT" cta="Mở dự án" icon="✎" />
                <MockTile color="orange" label="PLAY" cta="Chơi ngay" icon="▶" />
              </div>
              <div className="mt-6 flex justify-between text-[10px] text-muted-foreground">
                <span>v1.0.0 RC2</span>
                <span>Build 2026.07</span>
              </div>
            </div>
          </div>
          <FloatingBadge className="absolute -top-4 -left-4 animate-float-slow" emoji="⭐" label="Points" />
          <FloatingBadge className="absolute -top-6 right-8 animate-float-slower" emoji="📘" label="Book" />
          <FloatingBadge className="absolute bottom-8 -right-6 animate-float-slow" emoji="🏆" label="Trophy" />
          <FloatingBadge className="absolute -bottom-4 left-10 animate-float-slower" emoji="⏱" label="Timer" />
        </div>
      </div>
    </section>
  );
}

function MockTile({ color, label, cta, icon }: { color: "purple" | "green" | "orange"; label: string; cta: string; icon: string }) {
  const bg = color === "purple" ? "bg-brand-purple" : color === "green" ? "bg-brand-green" : "bg-brand-orange";
  return (
    <div className="rounded-2xl bg-card border border-border p-4 text-center shadow-card-soft">
      <div className={`mx-auto h-10 w-10 rounded-xl ${bg} text-white grid place-items-center text-xl font-bold`}>{icon}</div>
      <div className="mt-2 text-xs font-bold">{label}</div>
      <div className={`mt-3 rounded-lg ${bg} text-white text-[10px] font-semibold py-1.5`}>{cta}</div>
    </div>
  );
}

function FloatingBadge({ className, emoji, label }: { className?: string; emoji: string; label: string }) {
  return (
    <div className={`hidden sm:flex items-center gap-2 rounded-full bg-card border border-border px-3 py-1.5 text-xs font-semibold shadow-card-soft ${className}`}>
      <span className="text-base">{emoji}</span>{label}
    </div>
  );
}

function Trusted() {
  const stats = [
    { k: "3", v: "Thể loại game" },
    { k: "5", v: "Dạng bài tập" },
    { k: "2", v: "Chế độ xuất" },
    { k: "AI", v: "Edubot tích hợp" },
  ];
  return (
    <section className="border-y border-border/60 bg-card/40 backdrop-blur">
      <div className="mx-auto max-w-7xl px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s) => (
          <div key={s.v} className="text-center">
            <div className="text-3xl font-display font-bold text-gradient-brand">{s.k}</div>
            <div className="text-sm text-muted-foreground mt-1">{s.v}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Features() {
  const items = [
    { t: "Tạo dự án tức thì", d: "Thiết lập bài học mới trong vài phút với luồng dựng câu hỏi trực quan.", icon: "✨", c: "brand-purple" },
    { t: "Chạy ngay trên máy", d: "Ứng dụng desktop, không cần mạng khi soạn, dữ liệu lưu offline an toàn.", icon: "💻", c: "brand-orange" },
    { t: "Xuất web tức thời", d: "Nhận link chia sẻ trực tiếp để học sinh vào chơi trên trình duyệt.", icon: "🌐", c: "brand-pink" },
    { t: "Nhúng vào PowerPoint", d: "Xuất file HTML duy nhất, nhúng vào PPT bằng add-in EduPlay chính chủ.", icon: "📎", c: "brand-green" },
    { t: "Edubot AI chuyên sâu", d: "Sinh câu hỏi từ tài liệu hoặc yêu cầu, gợi ý nội dung và hình ảnh.", icon: "🤖", c: "brand-purple" },
    { t: "2 chế độ giảng/luyện", d: "Chế độ giảng dạy thoải mái, chế độ học sinh nghiêm như bài kiểm tra.", icon: "🎯", c: "brand-orange" },
  ];
  return (
    <section id="features" className="mx-auto max-w-7xl px-6 py-24">
      <SectionHead eyebrow="Tính năng" title={<>Mọi thứ một giáo viên cần <span className="text-gradient-brand">để dạy vui hơn</span></>} sub="Từ soạn câu hỏi đến triển khai trong lớp — EduPlay Studio gói gọn trong một studio desktop." />
      <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map((f) => (
          <div key={f.t} className="group relative rounded-2xl bg-gradient-card border border-border p-6 shadow-card-soft hover:shadow-float hover:-translate-y-1 transition">
            <div className={`h-12 w-12 rounded-xl bg-${f.c}/15 text-2xl grid place-items-center`}>{f.icon}</div>
            <h3 className="mt-5 text-lg font-bold">{f.t}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function SectionHead({ eyebrow, title, sub }: { eyebrow: string; title: React.ReactNode; sub: string }) {
  return (
    <div className="max-w-3xl">
      <div className="inline-flex rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold text-brand-purple uppercase tracking-wider">{eyebrow}</div>
      <h2 className="mt-4 text-4xl sm:text-5xl font-bold leading-tight">{title}</h2>
      <p className="mt-4 text-lg text-muted-foreground">{sub}</p>
    </div>
  );
}

function GameTypes() {
  const games = [
    {
      name: "Game thường",
      tag: "Đơn giản • Tập trung",
      desc: "Hiện từng câu hỏi rõ ràng, giao diện tối giản — hoàn hảo cho ôn tập nhanh trong lớp.",
      color: "from-brand-purple to-brand-pink",
      icon: "❓",
    },
    {
      name: "Bắt Cá",
      tag: "Thú vị • Tương tác",
      desc: "Chọn từng con cá, trả lời đúng để bắt. Sai — cá hóa xương và chìm xuống đáy đại dương.",
      color: "from-brand-green to-brand-purple",
      icon: "🐟",
    },
    {
      name: "Ai Là Triệu Phú",
      tag: "Kịch tính • Hiệu ứng đỉnh",
      desc: "Tối đa 15 câu (bốc ngẫu nhiên nếu vượt). Ở chế độ học sinh, sai 1 câu là dừng cuộc chơi.",
      color: "from-brand-orange to-brand-pink",
      icon: "💎",
    },
  ];
  return (
    <section id="games" className="relative py-24 bg-gradient-to-b from-transparent via-secondary/40 to-transparent">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHead eyebrow="Thể loại game" title={<>Ba lối chơi, <span className="text-gradient-brand">một studio</span></>} sub="Chọn phong cách phù hợp với tiết học — từ ôn tập tập trung đến gameshow náo nhiệt." />
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {games.map((g) => (
            <div key={g.name} className="group relative rounded-3xl overflow-hidden border border-border bg-card shadow-card-soft hover:shadow-float transition">
              <div className={`h-40 bg-gradient-to-br ${g.color} relative grid place-items-center`}>
                <span className="text-7xl drop-shadow-lg group-hover:scale-110 transition-transform">{g.icon}</span>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,white_0%,transparent_40%)] opacity-30" />
              </div>
              <div className="p-6">
                <div className="text-xs font-semibold text-brand-purple">{g.tag}</div>
                <h3 className="mt-1 text-2xl font-bold">{g.name}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{g.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function QuestionTypes() {
  const types = [
    { n: "Trắc nghiệm", d: "Nhiều lựa chọn", icon: "◉", c: "brand-purple" },
    { n: "Đúng / Sai", d: "Câu hỏi nhị phân", icon: "✓", c: "brand-green" },
    { n: "Nối ý", d: "Ghép cặp khái niệm", icon: "⇌", c: "brand-orange" },
    { n: "Điền từ", d: "Fill in the blank", icon: "▭", c: "brand-pink" },
    { n: "Trả lời ngắn", d: "Nhập câu trả lời", icon: "✎", c: "brand-purple" },
  ];
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <SectionHead eyebrow="Dạng bài tập" title={<>5 dạng câu hỏi <span className="text-gradient-brand">linh hoạt</span></>} sub="Trộn nhiều dạng bài để giữ tiết học đa dạng và cuốn hút." />
      <div className="mt-14 grid grid-cols-2 md:grid-cols-5 gap-4">
        {types.map((t) => (
          <div key={t.n} className="rounded-2xl bg-gradient-card border border-border p-6 text-center shadow-card-soft hover:-translate-y-1 transition">
            <div className={`mx-auto h-14 w-14 rounded-2xl bg-${t.c}/15 text-${t.c} grid place-items-center text-2xl font-bold`}>{t.icon}</div>
            <h4 className="mt-4 font-bold">{t.n}</h4>
            <p className="text-xs text-muted-foreground mt-1">{t.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ExportModes() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHead eyebrow="Xuất bản" title={<>Hai đường xuất, <span className="text-gradient-brand">một chất lượng</span></>} sub="Chia sẻ nhanh qua web hoặc nhúng thẳng vào giáo án PowerPoint — bạn chọn." />
        <div className="mt-14 grid md:grid-cols-2 gap-6">
          <ExportCard
            badge="Xuất Web"
            title="Chia sẻ tức thì qua link"
            desc="Ứng dụng trả về một đường link riêng để học sinh mở trên trình duyệt và chơi ngay. Không cần cài đặt phía học sinh."
            icon="🌐"
            gradient="from-brand-purple to-brand-pink"
          />
          <ExportCard
            badge="Xuất nội bộ"
            title="File HTML duy nhất + Add-in PPT"
            desc="Xuất ra 1 file HTML gọn nhẹ, dùng chính add-in PowerPoint do EduPlay phát triển để nhúng thẳng vào slide giảng dạy."
            icon="📎"
            gradient="from-brand-orange to-brand-yellow"
          />
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <ModeCard
            title="Chế độ Giảng dạy"
            desc="Xuất như một trò chơi trong lớp — cho phép chọn sai nhiều lần, phù hợp hoạt động trên giáo án PPT."
            color="brand-purple"
            tag="Cho giáo viên"
          />
          <ModeCard
            title="Chế độ Học sinh"
            desc="Xuất như một bài kiểm tra — không cho làm lại khi sai, phù hợp cho học sinh tự luyện."
            color="brand-orange"
            tag="Cho học sinh luyện tập"
          />
        </div>
      </div>
    </section>
  );
}

function ExportCard({ badge, title, desc, icon, gradient }: { badge: string; title: string; desc: string; icon: string; gradient: string }) {
  return (
    <div className="relative rounded-3xl overflow-hidden border border-border bg-card shadow-card-soft">
      <div className={`h-32 bg-gradient-to-br ${gradient} grid place-items-center text-6xl`}>{icon}</div>
      <div className="p-7">
        <div className="text-xs font-semibold text-brand-purple">{badge}</div>
        <h3 className="mt-1 text-2xl font-bold">{title}</h3>
        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function ModeCard({ title, desc, color, tag }: { title: string; desc: string; color: string; tag: string }) {
  return (
    <div className="rounded-3xl border border-border bg-gradient-card p-7 shadow-card-soft">
      <div className={`inline-flex text-xs font-semibold text-${color} bg-${color}/10 px-2.5 py-1 rounded-full`}>{tag}</div>
      <h3 className="mt-3 text-2xl font-bold">{title}</h3>
      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{desc}</p>
    </div>
  );
}

function Edubot() {
  const skills = [
    { t: "Tạo dự án từ tài liệu", d: "Đưa tài liệu vào — Edubot tự bóc câu hỏi và dựng dự án." },
    { t: "Tạo dự án từ yêu cầu", d: "Chỉ cần mô tả chủ đề, độ khó — Edubot sinh trọn bộ câu hỏi." },
    { t: "Tìm nội dung & hình ảnh", d: "Gợi ý minh họa, hình ảnh và ngữ liệu phù hợp." },
    { t: "Tư vấn dạng bài phù hợp", d: "Đề xuất thể loại game và dạng câu hỏi phù hợp lứa tuổi." },
  ];
  return (
    <section id="edubot" className="relative py-24 bg-gradient-to-b from-transparent via-brand-purple/5 to-transparent">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <div className="inline-flex rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold text-brand-purple uppercase tracking-wider">AI Trợ giảng</div>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold leading-tight">
            Gặp <span className="text-gradient-brand">Edubot</span> — trợ lý AI dạy học của bạn
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Edubot giúp bạn khởi tạo dự án, sinh câu hỏi và cải thiện nội dung —
            luôn túc trực trong studio.
          </p>
          <div className="mt-8 space-y-3">
            {skills.map((s) => (
              <div key={s.t} className="flex gap-4 rounded-2xl border border-border bg-card p-4 shadow-card-soft">
                <div className="h-10 w-10 shrink-0 rounded-xl bg-gradient-brand text-white grid place-items-center font-bold">E</div>
                <div>
                  <div className="font-semibold">{s.t}</div>
                  <div className="text-sm text-muted-foreground">{s.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-8 bg-gradient-brand opacity-20 blur-3xl rounded-[3rem]" />
          <div className="relative rounded-3xl bg-card border border-border shadow-float overflow-hidden">
            <div className="flex items-center justify-between px-5 py-4 border-b border-border bg-gradient-to-r from-brand-purple/10 to-brand-pink/10">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-xl bg-gradient-brand grid place-items-center text-white font-bold">E</div>
                <div>
                  <div className="font-display font-bold">EDUBOT</div>
                  <div className="text-[10px] text-brand-green">● Online</div>
                </div>
              </div>
              <div className="flex gap-1">
                <span className="h-6 w-6 rounded-full bg-secondary" />
                <span className="h-6 w-6 rounded-full bg-secondary" />
                <span className="h-6 w-6 rounded-full bg-destructive/70" />
              </div>
            </div>
            <div className="p-6 space-y-3 min-h-[280px]">
              <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-secondary p-4 text-sm">
                Xin chào! Mình là Edubot 👋 Mình có thể tạo trò chơi giáo dục,
                sinh câu hỏi và gợi ý cải thiện nội dung. Bạn cần gì hôm nay?
              </div>
              <div className="ml-auto max-w-[75%] rounded-2xl rounded-tr-sm bg-gradient-brand text-white p-4 text-sm">
                Tạo 10 câu trắc nghiệm về hệ mặt trời cho lớp 5.
              </div>
              <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-secondary p-4 text-sm">
                Đang soạn ✨ Bạn muốn dùng thể loại <b>Ai Là Triệu Phú</b> hay <b>Bắt Cá</b>?
              </div>
            </div>
            <div className="p-4 border-t border-border">
              <div className="flex items-center gap-2 rounded-full bg-secondary px-4 py-3 text-sm text-muted-foreground">
                <span>📎</span>
                <span className="flex-1">Nhập yêu cầu cho Edubot…</span>
                <span className="h-8 w-8 rounded-full bg-gradient-brand grid place-items-center text-white">→</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SystemReq() {
  const min = [
    ["Hệ điều hành", "Windows 10"],
    ["Dung lượng", "1 GB trở lên"],
    ["RAM", "4 GB"],
    ["CPU", "Intel Core i3 gen 4 / AMD tương đương (2 nhân, 4 luồng, 2.0 GHz+)"],
    ["GPU", "GPU tích hợp hỗ trợ DirectX 11 & OpenGL 3.3+ (HD 4000/4600, Radeon HD 7000…)"],
  ];
  const rec = [
    ["Hệ điều hành", "Windows 10 / 11"],
    ["Dung lượng", "2 GB trở lên"],
    ["RAM", "8 GB"],
    ["CPU", "Intel Core i5 gen 8 / AMD Ryzen 5 (4 nhân, 8 luồng+)"],
    ["GPU", "Intel Iris Xe, AMD Radeon Vega, NVIDIA GeForce MX hoặc cao hơn"],
  ];
  return (
    <section id="requirements" className="mx-auto max-w-7xl px-6 py-24">
      <SectionHead eyebrow="Cấu hình" title={<>Yêu cầu <span className="text-gradient-brand">hệ thống</span></>} sub="EduPlay Studio nhẹ và tương thích rộng — chạy tốt trên máy tính giáo viên phổ thông." />
      <div className="mt-14 grid md:grid-cols-2 gap-6">
        <ReqCard title="Tối thiểu" rows={min} accent="brand-orange" />
        <ReqCard title="Khuyến nghị" rows={rec} accent="brand-purple" featured />
      </div>
      <p className="mt-6 text-sm text-muted-foreground">
        * Hiện phiên bản đang trong giai đoạn phát triển và chỉ hỗ trợ Windows.
      </p>
    </section>
  );
}

function ReqCard({ title, rows, accent, featured }: { title: string; rows: string[][]; accent: string; featured?: boolean }) {
  return (
    <div className={`relative rounded-3xl border p-8 shadow-card-soft ${featured ? "border-transparent bg-gradient-brand text-white" : "border-border bg-card"}`}>
      <div className={`inline-flex text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full ${featured ? "bg-white/20" : `text-${accent} bg-${accent}/10`}`}>{title}</div>
      <div className="mt-6 divide-y divide-white/15">
        {rows.map(([k, v]) => (
          <div key={k} className={`py-4 grid grid-cols-3 gap-4 text-sm ${featured ? "divide-white/15" : ""}`}>
            <div className={`font-semibold ${featured ? "opacity-90" : ""}`}>{k}</div>
            <div className={`col-span-2 ${featured ? "opacity-95" : "text-muted-foreground"}`}>{v}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function DownloadCTA() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-brand p-10 sm:p-14 text-white shadow-glow">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20%_20%,white,transparent_40%)]" />
        <div className="relative grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex rounded-full bg-white/20 backdrop-blur px-3 py-1 text-xs font-semibold uppercase tracking-wider">v1.0.0 RC2</div>
            <h2 className="mt-4 text-4xl sm:text-5xl font-bold leading-tight">
              Sẵn sàng biến bài giảng thành cuộc chơi?
            </h2>
            <p className="mt-4 text-white/90 max-w-xl">
              Tải EduPlay Studio ngay hôm nay — miễn phí cho mục đích phi thương mại.
              Bắt đầu tạo trò chơi giáo dục đầu tiên trong vài phút.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={DOWNLOAD_URL} className="inline-flex items-center gap-2 rounded-full bg-white text-brand-purple px-6 py-3.5 font-semibold hover:scale-[1.02] transition">
                <DownloadIcon className="h-5 w-5" /> Tải Windows Installer
              </a>
              <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3.5 font-semibold hover:bg-white/10 transition">
                <GithubIcon className="h-5 w-5" /> Xem tất cả phiên bản
              </a>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 p-6">
              <div className="flex items-center gap-3">
                <img src={logo} alt="" className="h-12 w-12 rounded-xl bg-white/90 p-1.5" />
                <div>
                  <div className="font-display font-bold text-lg">EduPlay-Studio-v1.0.0-Setup.exe</div>
                  <div className="text-sm text-white/80">Windows • ~ vài trăm MB</div>
                </div>
              </div>
              <div className="mt-6 space-y-2 text-sm text-white/90">
                <div className="flex justify-between"><span>Phiên bản</span><span className="font-semibold">v1.0.0 RC2</span></div>
                <div className="flex justify-between"><span>Nền tảng</span><span className="font-semibold">Windows 10/11</span></div>
                <div className="flex justify-between"><span>Giấy phép</span><span className="font-semibold">PolyForm NC 1.0</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="mx-auto max-w-7xl px-6 py-14 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5">
            <img src={logo} alt="" className="h-9 w-9" />
            <span className="font-display font-bold tracking-tight">EDUPLAY STUDIO</span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-md">
            Studio desktop tất cả trong một để tạo trò chơi giáo dục tương tác,
            có AI Edubot hỗ trợ. Miễn phí cho mục đích phi thương mại.
          </p>
          <div className="mt-4 flex flex-wrap gap-2 text-xs">
            <a href="https://polyformproject.org/licenses/noncommercial/1.0.0" target="_blank" rel="noreferrer" className="rounded-full border border-border px-3 py-1 hover:bg-secondary">PolyForm NC 1.0</a>
            <a href="https://eduplay-game.web.app/privacy" target="_blank" rel="noreferrer" className="rounded-full border border-border px-3 py-1 hover:bg-secondary">Chính sách bảo mật</a>
            <a href="https://eduplay-game.web.app/terms" target="_blank" rel="noreferrer" className="rounded-full border border-border px-3 py-1 hover:bg-secondary">Điều khoản dịch vụ</a>
          </div>
        </div>

        <div>
          <div className="font-semibold text-sm">Liên hệ hỗ trợ</div>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><a href="mailto:tannguyenthanh498@gmail.com" className="hover:text-foreground">tannguyenthanh498@gmail.com</a></li>
            <li><a href="mailto:eduplay.line@hotmail.com" className="hover:text-foreground">eduplay.line@hotmail.com</a></li>
            <li><a href="mailto:eduplay.pro@hotmail.com" className="hover:text-foreground">eduplay.pro@hotmail.com</a></li>
          </ul>
        </div>

        <div>
          <div className="font-semibold text-sm">Cộng đồng</div>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><a href={GITHUB_URL} target="_blank" rel="noreferrer" className="hover:text-foreground">GitHub Releases</a></li>
            <li><a href="https://www.reddit.com/user/Mindless_Town_8994" target="_blank" rel="noreferrer" className="hover:text-foreground">Reddit — u/Mindless_Town_8994</a></li>
            <li><a href="https://www.instagram.com/tannguyenthanh498" target="_blank" rel="noreferrer" className="hover:text-foreground">Instagram / Threads</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-5 text-xs text-muted-foreground flex flex-wrap justify-between gap-2">
          <span>© {new Date().getFullYear()} EduPlay Studio — Fumiko (Kuro). All rights reserved.</span>
          <span>Made with 💜 for teachers</span>
        </div>
      </div>
    </footer>
  );
}

function DownloadIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 3v12" /><path d="m7 10 5 5 5-5" /><path d="M5 21h14" />
    </svg>
  );
}
function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.3 1.2 1-.3 2-.4 3-.4s2 .1 3 .4c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 3 .1 3.3.8.8 1.2 1.9 1.2 3.1 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5Z"/>
    </svg>
  );
}
