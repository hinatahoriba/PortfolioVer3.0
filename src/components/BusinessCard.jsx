import { useEffect, useRef, useState } from "react";

const IMG_SRC = "/business-card.png";

export default function BusinessCard() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef(null);

  const close = () => setOpen(false);

  const downloadImage = async () => {
    try {
      const res = await fetch(IMG_SRC, { cache: "no-store" });
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = "business-card.png";
      document.body.appendChild(a);
      a.click();
      a.remove();

      setTimeout(() => URL.revokeObjectURL(url), 1000);
    } catch {
      window.open(IMG_SRC, "_blank", "noopener,noreferrer");
    }
  };

  // ESCで閉じる & 背景スクロール防止
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") close();
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  useEffect(() => {
    if (open) panelRef.current?.focus();
  }, [open]);

  return (
    <>
      {/* 名刺の表示と保存ボタン（左右中央寄せ） */}
      <div className="w-full px-6 my-6">
        <div className="flex justify-center">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="
              px-8 py-3
              rounded-md
              text-base font-medium text-gray-900
              border border-gray-300 bg-white
              shadow-sm
              hover:bg-gray-50 active:bg-gray-100
              focus:outline-none focus:ring-2 focus:ring-gray-400
              text-center
            "
          >
            名刺の表示と保存
          </button>
        </div>
      </div>

      {/* ポップアップ */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) close();
          }}
        >
          <div
            ref={panelRef}
            tabIndex={-1}
            className="
              relative
              w-[min(92vw,560px)]
              bg-white
              rounded-2xl
              shadow-2xl
              border border-gray-200
              p-4
              outline-none
            "
            onMouseDown={(e) => e.stopPropagation()}
          >
            {/* 閉じるボタン */}
            <button
              onClick={close}
              className="
                absolute top-3 right-3
                h-9 w-9
                rounded-lg
                border border-gray-200
                bg-white
                text-xl
                hover:bg-gray-50
              "
            >
              ×
            </button>

            {/* 名刺画像（全体表示） */}
            <div className="flex justify-center">
              <img
                src={IMG_SRC}
                alt="名刺"
                className="
                  max-w-full
                  max-h-[70vh]
                  object-contain
                  rounded-xl
                  border border-gray-200
                "
                draggable={false}
              />
            </div>

            {/* 保存ボタン */}
            <div className="mt-4 flex justify-center">
              <button
                onClick={downloadImage}
                className="
                  px-4 py-2
                  rounded-md
                  text-sm font-medium
                  border border-gray-300
                  bg-white
                  hover:bg-gray-50
                  focus:outline-none focus:ring-2 focus:ring-gray-400
                "
              >
                画像を保存する
              </button>
            </div>

            {/* 説明テキスト */}
            <p className="mt-3 text-center text-sm text-gray-600">
              長押しして画像を保存してください
              <span className="block text-xs text-gray-500 mt-1">
                （PCの場合は右クリック→画像を保存）
              </span>
            </p>
          </div>
        </div>
      )}
    </>
  );
}
