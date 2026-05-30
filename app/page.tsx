"use client";

import { useState } from "react";

type Marble = {
  name: string;
  subtitle: string;
  image: string;
};

type TableDesign = {
  name: string;
  subtitle: string;
  description: string;
  image: string;
};

export default function Home() {
  const marbles: Marble[] = [
    { name: "Elazığ Vişne", subtitle: "Kırmızı Premium Mermer", image: "/textures/elazig-visne.jpg" },
    { name: "Veria Green", subtitle: "Yeşil Premium Mermer", image: "/textures/veria-green.jpg" },
    { name: "Arabescato", subtitle: "Beyaz Premium Mermer", image: "/textures/arabescato.jpg" },
    { name: "Icarius", subtitle: "Premium Natural Stone", image: "/textures/icarius.jpg" },
    { name: "Dream", subtitle: "Luxury Natural Stone", image: "/textures/dream.jpg" },
    { name: "Coppacabana", subtitle: "Exotic Natural Stone", image: "/textures/coppacabana.jpg" },
    { name: "Panda White", subtitle: "Premium White Marble", image: "/textures/panda-white.jpg" },
    { name: "Light Travertine", subtitle: "Premium Travertine", image: "/textures/light-travertine.jpg" },
    { name: "Perla Gold", subtitle: "Luxury Gold Marble", image: "/textures/perla-gold.jpg" },
    { name: "Fusion Berry", subtitle: "Exotic Premium Marble", image: "/textures/fusion-berry.jpg" },
    { name: "Calacatta Green", subtitle: "Premium Green Marble", image: "/textures/calacatta-green.jpg" },
    { name: "Loft Grey", subtitle: "Premium Grey Marble", image: "/textures/loft-grey.jpg" },
    { name: "Pink River", subtitle: "Luxury Pink Marble", image: "/textures/pink-river.jpg" },
    { name: "Volacas", subtitle: "Premium White Marble", image: "/textures/volacas.jpg" },
    { name: "Silver Travertine", subtitle: "Premium Travertine", image: "/textures/silver-travertine.jpg" },
    { name: "Bruno Perla", subtitle: "Luxury Natural Stone", image: "/textures/bruno-perla.jpg" },
    { name: "White Lake", subtitle: "Premium White Marble", image: "/textures/white-lake.jpg" },
    { name: "Venüs Grey", subtitle: "Premium Grey Marble", image: "/textures/venus-grey.jpg" },
    { name: "Metalicus", subtitle: "Exotic Natural Stone", image: "/textures/metalicus.jpg" },
    { name: "Yellow Sienna", subtitle: "Luxury Yellow Marble", image: "/textures/yellow-sienna.jpg" },
    { name: "Golden Root", subtitle: "Luxury Gold Marble", image: "/textures/golden-root.jpg" },
    { name: "Blue Jean", subtitle: "Luxury Blue Marble", image: "/textures/blue-jean.jpg" },
    { name: "Sofita", subtitle: "Premium Natural Stone", image: "/textures/sofita.jpg" },
    { name: "Terra Brown", subtitle: "Luxury Brown Marble", image: "/textures/terra-brown.jpg" },
    { name: "Calacatta Violet", subtitle: "Premium Violet Marble", image: "/textures/calacatta-violet.jpg" },
    { name: "Cloudy", subtitle: "Premium Natural Stone", image: "/textures/cloudy.jpg" },
    { name: "Lagoon", subtitle: "Exotic Natural Stone", image: "/textures/lagoon.jpg" },
    { name: "Rossa Venato", subtitle: "Premium Red Marble", image: "/textures/rossa-venato.jpg" },
    { name: "Taj Mahal", subtitle: "Luxury Beige Quartzite", image: "/textures/taj-mahal.jpg" },
    { name: "Green Patagonia", subtitle: "Exotic Green Natural Stone", image: "/textures/green-patagonia.jpg" },
    { name: "Green Forest", subtitle: "Premium Green Marble", image: "/textures/green-forest.jpg" },
    { name: "Fantasy Grey", subtitle: "Premium Grey Marble", image: "/textures/fantasy-grey.jpg" },
    { name: "Avacado", subtitle: "Premium Green Marble", image: "/textures/avacado.jpg" },
    { name: "Alanya Siyahı", subtitle: "Luxury Black Marble", image: "/textures/alanya-siyahi.jpg" },
    { name: "Grigio Cream", subtitle: "Premium Cream Marble", image: "/textures/grigio-cream.jpg" },
    { name: "Anatolian Red", subtitle: "Premium Red Marble", image: "/textures/anatolian-red.jpg" },
    { name: "Verde Oasis", subtitle: "Premium Green Marble", image: "/textures/verde-oasis.jpg" },
    { name: "Crystal Patagonia", subtitle: "Exotic Premium Stone", image: "/textures/crystal-patagonia.jpg" },
    { name: "Astana Grey", subtitle: "Premium Grey Marble", image: "/textures/astana-grey.jpg" },
    { name: "Green Paradise", subtitle: "Luxury Green Marble", image: "/textures/green-paradise.jpg" },
    { name: "Carrara", subtitle: "Classic White Marble", image: "/textures/carrara.jpg" },
    { name: "Clopatra Beige", subtitle: "Premium Beige Marble", image: "/textures/clopatra-beige.jpg" },
    { name: "Petrolyum Green", subtitle: "Luxury Green Marble", image: "/textures/petrolyum-green.jpg" },
    { name: "Snow Grey", subtitle: "Premium Grey Marble", image: "/textures/snow-grey.jpg" },
    { name: "Belvedere", subtitle: "Luxury Black Marble", image: "/textures/belvedere.jpg" },
    { name: "Fantastic Blue", subtitle: "Luxury Blue Marble", image: "/textures/fantastic-blue.jpg" },
    { name: "Burdur Beige", subtitle: "Classic Beige Marble", image: "/textures/burdur-beige.jpg" },
    { name: "Nero Picasso", subtitle: "Premium Black Marble", image: "/textures/nero-picasso.jpg" },
    { name: "Leilac", subtitle: "Premium Lilac Marble", image: "/textures/leilac.jpg" },
    { name: "Green Onyx", subtitle: "Luxury Green Onyx", image: "/textures/green-onyx.jpg" },
  ];

  const sizes = [180, 200, 220, 240];

  const tableDesigns: TableDesign[] = [
    {
      name: "Monolith",
      subtitle: "Modern merkez ayak",
      description: "Minimal ve güçlü duruşa sahip modern masa ayak tasarımı.",
      image: "/masa/monolith.png",
    },
    {
      name: "X Leg",
      subtitle: "X form ayak",
      description: "Lüks ve dikkat çekici iç mekânlar için güçlü X ayak formu.",
      image: "/masa/x-leg.png",
    },
    {
      name: "Double Pedestal",
      subtitle: "Çift blok taşıyıcı",
      description: "Büyük yemek masalarında dengeli ve premium görünüm.",
      image: "/masa/double-pedestal-minimal.png",
    },
    {
      name: "Sculptural",
      subtitle: "Heykelsi özel form",
      description: "Dekoratif, sanatsal ve etkileyici masa ayak dizaynı.",
      image: "/masa/sculptural.png",
    },
    {
      name: "Round Pedestal",
      subtitle: "Yuvarlak merkez ayak",
      description: "Yuvarlak masalar için sade, sıcak ve modern pedestal ayak tasarımı.",
      image: "/masa/round-pedestal.png",
    },
    {
      name: "Outdoor Monolith",
      subtitle: "Dış mekân blok ayak",
      description: "Bahçe ve teras kullanımları için güçlü, dengeli ve doğal taş görünümü.",
      image: "/masa/monolith-outdoor.png",
    },
    {
      name: "Oval Monolith",
      subtitle: "Oval tabla uyumlu ayak",
      description: "Oval masalarda yumuşak hatlı, modern ve zarif bir merkez ayak görünümü.",
      image: "/masa/oval-monolith.png",
    },
    {
      name: "Luxury X Leg",
      subtitle: "Metal X ayak",
      description: "Modern lüks salonlar için metal detaylı güçlü ve şık X ayak tasarımı.",
      image: "/masa/x-leg-luxury.png",
    },
  ];

  const [selected, setSelected] = useState<Marble>(marbles[0]);
  const [selectedDesign, setSelectedDesign] = useState<TableDesign>(tableDesigns[0]);
  const [size, setSize] = useState(220);
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [panStart, setPanStart] = useState({ x: 0, y: 0 });

  const whatsappText = encodeURIComponent(
    `Merhaba.

MERDİ STONE web sitesi üzerinden seçim yaptım.

Mermer: ${selected.name}
Tabla ölçüsü: ${size} cm
Masa dizaynı: ${selectedDesign.name}

Detaylı bilgi ve özel teklif almak istiyorum.`
  );

  const resetView = () => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  };

  const startDrag = (clientX: number, clientY: number) => {
    if (zoom <= 1) return;
    setDragging(true);
    setDragStart({ x: clientX, y: clientY });
    setPanStart(pan);
  };

  const moveDrag = (clientX: number, clientY: number) => {
    if (!dragging || zoom <= 1) return;

    const maxPan = (zoom - 1) * 310;
    const nextX = panStart.x + (clientX - dragStart.x);
    const nextY = panStart.y + (clientY - dragStart.y);

    setPan({
      x: Math.max(-maxPan, Math.min(maxPan, nextX)),
      y: Math.max(-maxPan, Math.min(maxPan, nextY)),
    });
  };

  const featured = [
    marbles[0],
    marbles[1],
    marbles[28],
    marbles[37],
    marbles[40],
    marbles[44],
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <header className="sticky top-0 z-50 flex h-[82px] items-center justify-between border-b border-white/10 bg-black/90 px-6 backdrop-blur md:px-10">
        <a href="#" className="block">
          <h1 className="font-serif text-2xl tracking-[7px] md:text-3xl md:tracking-[10px]">
            MERDİ STONE
          </h1>
          <p className="mt-1 text-[10px] tracking-[4px] text-[#c9a26d]">
            LUXURY MARBLE
          </p>
        </a>

        <nav className="hidden gap-10 text-sm text-white/60 md:flex">
          <a href="#koleksiyon" className="transition hover:text-[#c9a26d]">Koleksiyon</a>
          <a href="#masa-dizaynlari" className="transition hover:text-[#c9a26d]">Masa Dizaynları</a>
          <a href="#hakkimizda" className="transition hover:text-[#c9a26d]">Hakkımızda</a>
          <a href="#iletisim" className="transition hover:text-[#c9a26d]">İletişim</a>
        </nav>

        <a
          href={`https://wa.me/905321336898?text=${whatsappText}`}
          target="_blank"
          className="rounded-xl border border-[#c9a26d] px-6 py-3 text-sm font-bold text-[#c9a26d] transition hover:bg-[#c9a26d] hover:text-black"
        >
          TEKLİF AL
        </a>
      </header>

      <section className="grid min-h-[calc(100vh-82px)] grid-cols-1 lg:grid-cols-[1fr_520px]">
        <div className="relative flex min-h-[820px] items-center justify-center overflow-hidden bg-black">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_42%_49%,rgba(201,162,109,0.28),transparent_37%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_6%,rgba(255,210,140,0.34),transparent_25%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_19%,rgba(201,162,109,0.15),transparent_28%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/72 via-transparent to-black" />

          <div className="absolute left-0 top-0 h-full w-56 opacity-100">
            <div className="absolute left-3 top-0 h-[480px] w-[5px] bg-gradient-to-b from-transparent via-[#e0ad5f] to-transparent blur-[1px]" />
            <div className="absolute left-9 top-10 h-[360px] w-[3px] bg-gradient-to-b from-transparent via-[#f7d28b] to-transparent blur-[2px]" />
            <div className="absolute left-16 top-0 h-72 w-[1px] bg-gradient-to-b from-transparent via-white/80 to-transparent blur-[1px]" />
            <div className="absolute left-0 top-0 h-[500px] w-64 bg-[radial-gradient(ellipse_at_top_left,rgba(239,190,110,0.24),transparent_68%)] blur-xl" />
          </div>

          <div className="absolute left-[-80px] top-[70px] h-[420px] w-[520px] rotate-[-24deg] bg-[linear-gradient(90deg,transparent,rgba(255,207,134,0.22),transparent)] blur-2xl" />

          <div className="gold-arc gold-arc-one" />
          <div className="gold-arc gold-arc-two" />
          <div className="gold-arc gold-arc-three" />
          <div className="gold-spark spark-one" />
          <div className="gold-spark spark-two" />

          <div className="absolute inset-0 opacity-[0.10] [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:120px_120px]" />

          <div className="absolute inset-x-0 bottom-0 h-[405px] overflow-hidden">
            <div
              className="absolute bottom-[10px] left-[-10%] h-[620px] w-[120%] origin-bottom bg-cover bg-center opacity-[0.96]"
              style={{
                backgroundImage:
                  "linear-gradient(to bottom, rgba(0,0,0,0.10), rgba(0,0,0,0.46), rgba(0,0,0,0.96)), url('/textures/alanya-siyahi.jpg')",
                transform: "perspective(760px) rotateX(70deg) scale(1.35)",
                filter: "contrast(1.35) brightness(0.72) saturate(1.08)",
              }}
            />
          </div>

          <div className="absolute bottom-[88px] left-0 right-0 h-[150px] bg-[linear-gradient(to_top,rgba(222,174,93,0.36),transparent)] blur-2xl" />
          <div className="absolute bottom-0 left-0 right-0 h-[300px] bg-[radial-gradient(ellipse_at_center,rgba(201,162,109,0.44),transparent_64%)] blur-2xl" />

          <div className="absolute left-6 top-[112px] z-20 md:left-20 md:top-[122px]">
            <div className="mb-5 h-px w-16 bg-[#c9a26d]" />
            <p className="mb-4 text-xs tracking-[6px] text-[#c9a26d]">
              PREMIUM MARBLE CONFIGURATOR
            </p>
            <h2 className="font-serif text-5xl leading-tight md:text-6xl">
              Mermer
              <br />
              Desenini Seç
            </h2>
          </div>

          <div className="absolute left-6 top-1/2 z-30 hidden -translate-y-1/2 flex-col items-center gap-4 md:flex">
            <button
              onClick={() => setZoom((z) => Math.min(1.8, Number((z + 0.1).toFixed(2))))}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#c9a26d]/40 bg-black/55 text-2xl text-white backdrop-blur transition hover:border-[#c9a26d] hover:text-[#c9a26d]"
            >
              +
            </button>

            <input
              type="range"
              min="1"
              max="1.8"
              step="0.01"
              value={zoom}
              onChange={(e) => {
                const value = Number(e.target.value);
                setZoom(value);
                if (value === 1) setPan({ x: 0, y: 0 });
              }}
              className="h-36 w-1 rotate-[-90deg] accent-[#c9a26d]"
            />

            <button
              onClick={() => {
                const value = Math.max(1, Number((zoom - 0.1).toFixed(2)));
                setZoom(value);
                if (value === 1) setPan({ x: 0, y: 0 });
              }}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#c9a26d]/40 bg-black/55 text-2xl text-white backdrop-blur transition hover:border-[#c9a26d] hover:text-[#c9a26d]"
            >
              −
            </button>

            <button
              onClick={resetView}
              className="rounded-full border border-[#c9a26d]/40 bg-black/55 px-4 py-2 text-xs text-[#c9a26d] backdrop-blur"
            >
              RESET
            </button>
          </div>

          <div className="absolute z-10 h-[260px] w-[900px] rounded-full bg-[#c9a26d]/18 blur-[120px]" />
          <div className="absolute bottom-[170px] z-10 h-36 w-[62vw] max-w-[980px] rounded-[50%] bg-[#c9a26d]/32 blur-3xl" />

          <div
            className={`relative z-20 mt-[135px] h-[43vw] max-h-[560px] min-h-[350px] w-[72vw] max-w-[1120px] touch-none select-none rounded-[58px] border border-white/20 bg-cover bg-center shadow-[0_80px_165px_rgba(0,0,0,0.98),0_0_130px_rgba(201,162,109,0.23)] transition-transform duration-300 ${
              zoom > 1 ? "cursor-grab active:cursor-grabbing" : "cursor-default"
            }`}
            onMouseDown={(e) => startDrag(e.clientX, e.clientY)}
            onMouseMove={(e) => moveDrag(e.clientX, e.clientY)}
            onMouseUp={() => setDragging(false)}
            onMouseLeave={() => setDragging(false)}
            onTouchStart={(e) => startDrag(e.touches[0].clientX, e.touches[0].clientY)}
            onTouchMove={(e) => {
              e.preventDefault();
              moveDrag(e.touches[0].clientX, e.touches[0].clientY);
            }}
            onTouchEnd={() => setDragging(false)}
            style={{
              backgroundImage: `url(${selected.image})`,
              transform: `scale(${zoom}) translate(${pan.x / zoom}px, ${pan.y / zoom}px)`,
              filter: "contrast(1.1) saturate(1.08)",
            }}
          >
            <div className="pointer-events-none absolute inset-0 rounded-[58px] bg-[radial-gradient(circle_at_25%_15%,rgba(255,255,255,0.18),transparent_34%)]" />
            <div className="pointer-events-none absolute inset-0 rounded-[58px] bg-gradient-to-br from-white/25 via-transparent to-black/45" />
            <div className="pointer-events-none absolute inset-0 rounded-[58px] shadow-[inset_0_0_32px_rgba(255,255,255,0.28),inset_0_-32px_48px_rgba(0,0,0,0.64)]" />
            <div className="pointer-events-none absolute -bottom-7 left-[8%] right-[8%] h-12 rounded-[50%] bg-black/65 blur-xl" />
          </div>

          <div
            className="pointer-events-none absolute z-10 mt-[520px] h-[255px] w-[68vw] max-w-[1060px] rounded-[58px] bg-cover bg-center opacity-[0.48] blur-[2.8px]"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0.18), rgba(0,0,0,0.96)), url(${selected.image})`,
              transform: "scaleY(-1) perspective(780px) rotateX(61deg)",
              filter: "contrast(1.08) saturate(0.9)",
            }}
          />

          <div className="absolute bottom-28 left-1/2 z-40 flex -translate-x-1/2 items-center gap-3 md:hidden">
            <button
              onClick={() => setZoom((z) => Math.min(1.8, Number((z + 0.1).toFixed(2))))}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#c9a26d]/50 bg-black/70 text-2xl text-[#c9a26d] backdrop-blur"
            >
              +
            </button>

            <button
              onClick={() => {
                const value = Math.max(1, Number((zoom - 0.1).toFixed(2)));
                setZoom(value);
                if (value === 1) setPan({ x: 0, y: 0 });
              }}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#c9a26d]/50 bg-black/70 text-2xl text-[#c9a26d] backdrop-blur"
            >
              −
            </button>

            <button
              onClick={resetView}
              className="rounded-full border border-[#c9a26d]/50 bg-black/70 px-4 py-3 text-xs font-bold text-[#c9a26d] backdrop-blur"
            >
              RESET
            </button>
          </div>

          <div className="absolute bottom-10 left-1/2 z-30 -translate-x-1/2 rounded-xl border border-[#c9a26d]/30 bg-black/65 px-6 py-4 text-sm text-[#d8bf8a] shadow-[0_0_35px_rgba(201,162,109,0.18)] backdrop-blur">
            Yakınlaştırın · Sürükleyerek yüzeyde gezin
          </div>
        </div>

        <aside className="border-l border-white/10 bg-[linear-gradient(180deg,#080808,#050505)] shadow-[0_0_90px_rgba(0,0,0,.95)]">
          <div className="border-b border-white/[0.06] p-8">
            <div
              className="h-32 rounded-2xl border border-white/10 bg-cover bg-center shadow-[inset_0_0_18px_rgba(255,255,255,.08)]"
              style={{ backgroundImage: `url(${selected.image})` }}
            />

            <h3 className="mt-5 text-3xl font-semibold">{selected.name}</h3>
            <p className="mt-1 text-white/55">{selected.subtitle}</p>
          </div>

          <div className="border-b border-white/[0.06] bg-white/[0.015] p-8">
            <h4 className="mb-5 text-sm tracking-[3px] text-[#c9a26d]">
              MERMER SEÇİMİ
            </h4>

            <div className="luxury-scroll grid max-h-[360px] grid-cols-6 gap-3 overflow-y-auto pr-2">
              {marbles.map((marble) => (
                <button
                  key={marble.name}
                  title={marble.name}
                  onClick={() => {
                    setSelected(marble);
                    resetView();
                  }}
                  className={`relative h-[68px] rounded-[16px] border bg-cover bg-center transition duration-300 hover:-translate-y-[2px] hover:scale-[1.08] ${
                    selected.name === marble.name
                      ? "border-[#c9a26d] shadow-[0_0_35px_rgba(201,162,109,0.55)]"
                      : "border-white/10 hover:border-[#c9a26d]/55"
                  }`}
                  style={{ backgroundImage: `url(${marble.image})` }}
                >
                  {selected.name === marble.name && (
                    <span className="absolute bottom-1 right-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#c9a26d] text-xs font-bold text-black">
                      ✓
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="border-b border-white/[0.06] p-8">
            <h4 className="mb-5 text-sm tracking-[3px] text-[#c9a26d]">
              TABLA ÖLÇÜSÜ
            </h4>

            <div className="grid grid-cols-4 gap-3">
              {sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`rounded-xl border py-4 transition hover:-translate-y-[1px] ${
                    size === s
                      ? "border-[#c9a26d] bg-gradient-to-r from-[#c9a26d] to-[#dfbb86] text-black shadow-[0_0_24px_rgba(201,162,109,.25)]"
                      : "border-white/15 bg-white/[0.03] hover:border-[#c9a26d]"
                  }`}
                >
                  {s} cm
                </button>
              ))}
            </div>
          </div>

          <div className="border-b border-white/[0.06] p-8">
            <h4 className="mb-5 text-sm tracking-[3px] text-[#c9a26d]">
              MASA DİZAYNI
            </h4>

            <div className="grid grid-cols-2 gap-3">
              {tableDesigns.map((design) => (
                <button
                  key={design.name}
                  onClick={() => setSelectedDesign(design)}
                  className={`rounded-xl border p-4 text-left transition hover:-translate-y-[1px] ${
                    selectedDesign.name === design.name
                      ? "border-[#c9a26d] bg-[#c9a26d] text-black"
                      : "border-white/15 bg-white/[0.03] text-white hover:border-[#c9a26d]"
                  }`}
                >
                  <p className="font-semibold">{design.name}</p>
                  <p className={`mt-1 text-xs ${selectedDesign.name === design.name ? "text-black/60" : "text-white/45"}`}>
                    {design.subtitle}
                  </p>
                </button>
              ))}
            </div>
          </div>

          <div className="p-8">
            <a
              href={`https://wa.me/905321336898?text=${whatsappText}`}
              target="_blank"
              className="block rounded-xl bg-gradient-to-r from-[#c9a26d] to-[#dfbb86] py-5 text-center text-lg font-bold text-black transition hover:scale-[1.03] hover:shadow-[0_0_45px_rgba(201,162,109,.35)]"
            >
              BU MERMERLE TEKLİF AL
            </a>

            <p className="mt-5 text-center text-sm text-white/45">
              Ücretsiz keşif ve özel teklif
            </p>
          </div>
        </aside>
      </section>

      <section id="koleksiyon" className="border-t border-white/10 bg-[#070707] px-6 py-20 md:px-10">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-3 text-xs tracking-[6px] text-[#c9a26d]">KOLEKSİYON</p>
              <h3 className="font-serif text-4xl md:text-5xl">Öne Çıkan Mermerler</h3>
            </div>
            <p className="max-w-md text-white/50">
              Premium yaşam alanları için seçilmiş doğal taş dokuları.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {featured.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  setSelected(item);
                  resetView();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] text-left transition hover:-translate-y-2 hover:border-[#c9a26d]/60"
              >
                <div
                  className="h-72 bg-cover bg-center transition duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <div className="p-6">
                  <p className="mb-2 text-xs tracking-[4px] text-[#c9a26d]">PREMIUM STONE</p>
                  <h4 className="font-serif text-2xl">{item.name}</h4>
                  <p className="mt-2 text-sm text-white/50">{item.subtitle}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section id="masa-dizaynlari" className="border-t border-white/10 bg-black px-6 py-24 md:px-10">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-14 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-3 text-xs tracking-[6px] text-[#c9a26d]">
                MASA DİZAYNLARI
              </p>
              <h3 className="font-serif text-4xl leading-tight md:text-5xl">
                Popüler Masa Ayak Dizaynları
              </h3>
            </div>

            <p className="max-w-xl text-white/50">
              Popüler masa ayak modellerini inceleyin ve seçiminizi teklif mesajına ekleyin.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            {tableDesigns.map((design) => (
              <button
                key={design.name}
                onClick={() => setSelectedDesign(design)}
                className={`group overflow-hidden rounded-3xl border bg-[#090909] text-left transition hover:-translate-y-2 ${
                  selectedDesign.name === design.name
                    ? "border-[#c9a26d] shadow-[0_0_45px_rgba(201,162,109,0.35)]"
                    : "border-white/10 hover:border-[#c9a26d]/60"
                }`}
              >
                <div className="relative h-[390px] overflow-hidden bg-black">
                  <img
                    src={design.image}
                    alt={design.name}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/65" />

                  {selectedDesign.name === design.name && (
                    <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#c9a26d] text-sm font-black text-black">
                      ✓
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <p className="mb-2 text-xs tracking-[4px] text-[#c9a26d]">
                    TABLE DESIGN
                  </p>
                  <h4 className="font-serif text-2xl">{design.name}</h4>
                  <p className="mt-2 text-sm text-white/45">{design.subtitle}</p>
                  <p className="mt-4 text-sm leading-relaxed text-white/55">
                    {design.description}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section id="hakkimizda" className="border-t border-white/10 bg-black px-6 py-20 md:px-10">
        <div className="mx-auto grid max-w-[1500px] gap-10 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-3 text-xs tracking-[6px] text-[#c9a26d]">HAKKIMIZDA</p>
            <h3 className="font-serif text-4xl leading-tight md:text-6xl">
              Doğal taşta premium seçim deneyimi.
            </h3>
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-white/60">
            <p>
              MERDİ STONE, özel üretim mermer masa ve doğal taş yüzey çözümleri
              sunan premium bir markadır. Her projede taşın damar yapısı, renk
              uyumu ve mekânın karakteri dikkate alınarak seçim yapılır.
            </p>
            <p>
              Amacımız, müşterilerimizin mermer desenlerini dijital ortamda
              inceleyebilmesini ve doğru taşı daha kolay seçebilmesini sağlamaktır.
            </p>

            <div className="grid gap-4 pt-4 md:grid-cols-3">
              {[
                ["50+", "Mermer Deseni"],
                ["Özel", "Ölçü Üretim"],
                ["Premium", "İşçilik"],
              ].map(([big, small]) => (
                <div key={small} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                  <div className="font-serif text-4xl text-[#c9a26d]">{big}</div>
                  <div className="mt-2 text-sm text-white/55">{small}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="iletisim" className="border-t border-white/10 bg-[#080706] px-6 py-20 md:px-10">
        <div className="mx-auto grid max-w-[1500px] gap-8 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            <p className="mb-4 text-xs tracking-[5px] text-[#c9a26d]">WHATSAPP</p>
            <h4 className="font-serif text-3xl">Teklif Hattı</h4>
            <p className="mt-4 text-white/55">
              Seçtiğiniz mermer, ölçü ve masa dizaynıyla hızlıca bilgi alın.
            </p>
            <a
              href={`https://wa.me/905321336898?text=${whatsappText}`}
              target="_blank"
              className="mt-7 inline-block rounded-xl bg-gradient-to-r from-[#c9a26d] to-[#dfbb86] px-7 py-4 font-bold text-black"
            >
              WhatsApp’tan Yaz
            </a>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            <p className="mb-4 text-xs tracking-[5px] text-[#c9a26d]">İLETİŞİM</p>
            <h4 className="font-serif text-3xl">MERDİ STONE</h4>
            <div className="mt-6 space-y-3 text-white/60">
              <p>Telefon: +90 532 133 68 98</p>
              <p>WhatsApp Teklif Hattı</p>
              <p>Instagram / Pinterest</p>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            <p className="mb-4 text-xs tracking-[5px] text-[#c9a26d]">KONUM</p>
            <h4 className="font-serif text-3xl">Ataşehir / İstanbul</h4>
            <p className="mt-4 leading-relaxed text-white/55">
              Ferhatpaşa Mahallesi Karadeniz Caddesi,
              <br />
              101. Sokak No:55,
              <br />
              34888 Ataşehir / İstanbul
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-black px-6 py-14 md:px-10">
        <div className="mx-auto grid max-w-[1500px] gap-12 md:grid-cols-4">
          <div>
            <h2 className="font-serif text-3xl tracking-[8px]">MERDİ STONE</h2>
            <p className="mt-3 text-xs tracking-[4px] text-[#c9a26d]">LUXURY MARBLE</p>
            <p className="mt-6 leading-relaxed text-white/55">
              Premium mermer masa koleksiyonları ve özel üretim çözümleri.
            </p>
          </div>

          <div>
            <h4 className="mb-5 font-semibold">Menü</h4>
            <div className="space-y-3 text-white/60">
              <p>Koleksiyon</p>
              <p>Masa Dizaynları</p>
              <p>Hakkımızda</p>
              <p>İletişim</p>
            </div>
          </div>

          <div>
            <h4 className="mb-5 font-semibold">İletişim</h4>
            <div className="space-y-3 text-white/60">
              <p>+90 532 133 68 98</p>
              <p>WhatsApp Teklif Hattı</p>
              <p>Ferhatpaşa Mah. Karadeniz Cad.</p>
              <p>101. Sk. No:55 Ataşehir / İstanbul</p>
            </div>
          </div>

          <div>
            <h4 className="mb-5 font-semibold">Sosyal Medya</h4>
            <div className="space-y-3 text-white/60">
              <p>Instagram</p>
              <p>WhatsApp</p>
              <p>Pinterest</p>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8 text-center text-sm text-white/40">
          © 2026 MERDİ STONE — All Rights Reserved
        </div>
      </footer>

      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }

        .luxury-scroll::-webkit-scrollbar {
          width: 6px;
        }

        .luxury-scroll::-webkit-scrollbar-track {
          background: transparent;
        }

        .luxury-scroll::-webkit-scrollbar-thumb {
          background: rgba(201, 162, 109, 0.35);
          border-radius: 999px;
        }

        .luxury-scroll::-webkit-scrollbar-thumb:hover {
          background: rgba(201, 162, 109, 0.65);
        }

        .gold-arc {
          position: absolute;
          border: 1px solid rgba(201, 162, 109, 0.58);
          border-left-color: transparent;
          border-bottom-color: transparent;
          border-radius: 9999px;
          filter: drop-shadow(0 0 18px rgba(201, 162, 109, 0.35));
          animation: slowFloat 9s ease-in-out infinite alternate;
        }

        .gold-arc-one {
          width: 840px;
          height: 840px;
          right: 110px;
          top: 98px;
          opacity: 0.8;
        }

        .gold-arc-two {
          width: 610px;
          height: 610px;
          right: 295px;
          top: 230px;
          opacity: 0.46;
          animation-delay: 1.5s;
        }

        .gold-arc-three {
          width: 1000px;
          height: 1000px;
          right: -160px;
          top: 25px;
          opacity: 0.29;
          animation-delay: 3s;
        }

        .gold-spark {
          position: absolute;
          width: 7px;
          height: 7px;
          border-radius: 9999px;
          background: #ffd891;
          box-shadow: 0 0 28px rgba(255, 216, 145, 0.9);
          animation: pulseSpark 2.8s ease-in-out infinite alternate;
        }

        .spark-one {
          right: 210px;
          top: 210px;
        }

        .spark-two {
          right: 120px;
          top: 350px;
          animation-delay: 1.2s;
        }

        @keyframes slowFloat {
          from {
            transform: translateY(0px) rotate(0deg);
          }
          to {
            transform: translateY(-18px) rotate(3deg);
          }
        }

        @keyframes pulseSpark {
          from {
            opacity: 0.35;
            transform: scale(0.85);
          }
          to {
            opacity: 1;
            transform: scale(1.4);
          }
        }
      `}</style>
    </main>
  );
}