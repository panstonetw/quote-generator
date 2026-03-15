export default function QuoteGeneratorClone() {
  const today = new Date().toISOString().slice(0, 10)

  const inputClass =
    'w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-zinc-400'
  const cardClass = 'rounded-2xl border border-zinc-200 bg-white shadow-sm'

  return (
    <div className="min-h-screen bg-zinc-100 text-zinc-900">
      <div className="mx-auto max-w-[1180px] px-6 py-8">
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold tracking-tight">報價單產生器</h1>
          </div>
          <div className="flex items-center gap-3">
            <button className="rounded-lg border border-zinc-300 bg-white px-3 py-1.5 text-sm font-medium shadow-sm">
              GitHub Star
            </button>
            <button className="rounded-lg border border-zinc-300 bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-700 shadow-sm">
              登入
            </button>
          </div>
        </div>

        <div className="mb-4 flex items-center gap-2 rounded-xl border border-zinc-200 bg-white p-1 shadow-sm">
          <button className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-zinc-900 shadow-sm border border-zinc-200">
            報價單
          </button>
          <button className="rounded-lg px-4 py-2 text-sm text-zinc-500">更新紀錄</button>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-6">
            <section className={cardClass}>
              <div className="flex items-center justify-between border-b border-zinc-100 px-6 py-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-zinc-100 text-xl">📄</div>
                  <h2 className="text-2xl font-bold">基本資料</h2>
                </div>
                <button className="text-sm text-zinc-500">隱藏預覽</button>
              </div>

              <div className="space-y-6 p-6">
                <div className="rounded-2xl bg-zinc-50 p-5">
                  <div className="mb-5 flex items-center gap-2 text-lg font-semibold">
                    <span>👥</span>
                    <span>客戶資料</span>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium">客戶名稱 <span className="text-red-500">*</span></label>
                      <input className={inputClass} placeholder="請輸入客戶名稱" />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium">統一編號</label>
                      <input className={inputClass} placeholder="請輸入統一編號" />
                    </div>
                  </div>
                  <button className="mt-5 text-sm font-medium text-zinc-700">⌄ LOGO、聯絡人、電話、地址</button>
                </div>

                <div className="rounded-2xl bg-zinc-50 p-5">
                  <div className="mb-5 flex items-center gap-2 text-lg font-semibold">
                    <span>🧾</span>
                    <span>報價人員資料</span>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium">報價公司/人員 <span className="text-red-500">*</span></label>
                      <input className={inputClass} placeholder="請輸入報價人員" />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium">統一編號</label>
                      <input className={inputClass} placeholder="請輸入統一編號" />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium">E-mail <span className="text-red-500">*</span></label>
                      <input className={inputClass} placeholder="請輸入電子信箱" />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium">聯絡電話</label>
                      <div className="flex gap-2">
                        <input className={inputClass + ' flex-1'} placeholder="09xx-xxx-xxx 或 0x-xx" />
                        <input className="w-24 rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm" placeholder="分機" />
                      </div>
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium">報價日期</label>
                      <input className={inputClass} defaultValue={today} />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium">有效日期</label>
                      <input className={inputClass} placeholder="------" />
                    </div>
                  </div>
                  <button className="mt-5 text-sm font-medium text-zinc-700">⌄ LOGO、發票章、地址</button>
                </div>
              </div>
            </section>

            <section className={cardClass}>
              <div className="flex items-center justify-between border-b border-zinc-100 px-6 py-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-zinc-100 text-xl">🛒</div>
                  <h2 className="text-2xl font-bold">服務項目</h2>
                </div>
                <button className="rounded-xl bg-sky-700 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-sky-800">
                  ＋ 新增項目
                </button>
              </div>

              <div className="overflow-x-auto p-6">
                <table className="w-full min-w-[760px] border-separate border-spacing-y-3 text-sm">
                  <thead>
                    <tr className="text-zinc-500">
                      <th className="px-3 text-left font-medium">類別</th>
                      <th className="px-3 text-left font-medium">項目</th>
                      <th className="px-3 text-left font-medium">說明</th>
                      <th className="px-3 text-right font-medium">單價</th>
                      <th className="px-3 text-right font-medium">數量</th>
                      <th className="px-3 text-right font-medium">金額</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="rounded-l-xl border border-zinc-200 bg-white px-3 py-3">-</td>
                      <td className="border-y border-zinc-200 bg-white px-3 py-3">網站設計與開發</td>
                      <td className="border-y border-zinc-200 bg-white px-3 py-3 text-zinc-500">前台頁面、表單、報價預覽</td>
                      <td className="border-y border-zinc-200 bg-white px-3 py-3 text-right">NT$ 36,000</td>
                      <td className="border-y border-zinc-200 bg-white px-3 py-3 text-right">1</td>
                      <td className="rounded-r-xl border border-zinc-200 bg-white px-3 py-3 text-right font-semibold">NT$ 36,000</td>
                    </tr>
                    <tr>
                      <td className="rounded-l-xl border border-zinc-200 bg-white px-3 py-3">-</td>
                      <td className="border-y border-zinc-200 bg-white px-3 py-3">版面客製與 PDF 匯出</td>
                      <td className="border-y border-zinc-200 bg-white px-3 py-3 text-zinc-500">PDF、圖片、Excel 匯出</td>
                      <td className="border-y border-zinc-200 bg-white px-3 py-3 text-right">NT$ 12,000</td>
                      <td className="border-y border-zinc-200 bg-white px-3 py-3 text-right">1</td>
                      <td className="rounded-r-xl border border-zinc-200 bg-white px-3 py-3 text-right font-semibold">NT$ 12,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </div>

          <aside className={cardClass + ' h-fit sticky top-6'}>
            <div className="border-b border-zinc-100 px-6 py-5">
              <div className="flex items-center gap-2 text-2xl font-bold">
                <span>👁️</span>
                <span>即時預覽</span>
              </div>
            </div>

            <div className="space-y-5 p-6">
              <div className="rounded-xl border border-orange-200 bg-orange-50 px-4 py-3 text-sm text-orange-800">
                請先完成必填欄位後才能匯出報價單
              </div>

              <div className="flex flex-wrap gap-2">
                <button className="rounded-lg border border-zinc-200 bg-zinc-100 px-4 py-2 text-sm text-zinc-400">PDF</button>
                <button className="rounded-lg border border-zinc-200 bg-zinc-100 px-4 py-2 text-sm text-zinc-400">圖片</button>
                <button className="rounded-lg border border-zinc-200 bg-zinc-100 px-4 py-2 text-sm text-zinc-400">Excel</button>
              </div>

              <div>
                <div className="mb-3 text-sm font-medium text-zinc-500">選擇報價單樣式</div>
                <div className="flex gap-2">
                  <button className="rounded-lg border-2 border-sky-700 bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-900">精美版</button>
                  <button className="rounded-lg border border-zinc-200 bg-white px-4 py-2 text-sm">詳細版</button>
                  <button className="rounded-lg border border-zinc-200 bg-white px-4 py-2 text-sm">並列版</button>
                </div>
              </div>

              <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
                <h3 className="mb-5 text-3xl font-bold">[客戶名稱] - 報價單</h3>
                <div className="mb-6 h-px bg-zinc-200" />
                <div className="mb-6 grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 text-sm">
                  <div className="font-semibold">報價人員：</div>
                  <div>-</div>
                  <div className="font-semibold">報價日期：</div>
                  <div>{today}</div>
                </div>

                <div className="overflow-hidden rounded-xl border border-zinc-200">
                  <table className="w-full text-sm">
                    <thead className="bg-zinc-50 text-zinc-600">
                      <tr>
                        <th className="px-4 py-3 text-left font-medium">類別</th>
                        <th className="px-4 py-3 text-left font-medium">項目</th>
                        <th className="px-4 py-3 text-right font-medium">單價</th>
                        <th className="px-4 py-3 text-right font-medium">數量</th>
                        <th className="px-4 py-3 text-right font-medium">金額</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t border-zinc-200">
                        <td className="px-4 py-3">-</td>
                        <td className="px-4 py-3">網站設計與開發</td>
                        <td className="px-4 py-3 text-right">$36,000</td>
                        <td className="px-4 py-3 text-right">1</td>
                        <td className="px-4 py-3 text-right">$36,000</td>
                      </tr>
                      <tr className="border-t border-zinc-200">
                        <td className="px-4 py-3">-</td>
                        <td className="px-4 py-3">版面客製與 PDF 匯出</td>
                        <td className="px-4 py-3 text-right">$12,000</td>
                        <td className="px-4 py-3 text-right">1</td>
                        <td className="px-4 py-3 text-right">$12,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-4 text-right text-lg font-semibold">
                  未稅：<span className="text-red-600">NT$ 48,000 元</span>
                </div>

                <div className="mt-10 text-sm text-zinc-700">客戶簽章</div>
                <div className="mt-24 h-px bg-zinc-200" />
                <div className="mt-6 text-center text-xs text-zinc-400">
                  使用報價單產生器製作｜demo clone
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}

