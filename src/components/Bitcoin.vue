<template>
  <section
    class="rounded-2xl border border-gray-800 bg-gray-900 bg-opacity-95 backdrop-blur-md shadow-card shadow-accent-glow p-5 sm:p-8"
  >
    <div class="relative">
      <template v-if="spinner">
        <div
          class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm"
        >
          <svg
            class="animate-spin h-12 w-12 text-accent-soft"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              class="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            />
            <path
              class="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        </div>
      </template>

      <div class="space-y-6">
        <div>
          <h2 class="text-lg font-semibold text-gray-100 tracking-tight">
            Watchlist
          </h2>
          <p class="mt-1 text-sm text-gray-500">
            Add a symbol — suggestions update as you type.
          </p>
        </div>

        <div class="flex flex-col sm:flex-row sm:items-end gap-4">
          <div class="w-full sm:max-w-xs flex-1">
            <label
              for="wallet"
              class="block text-sm font-medium text-gray-400"
            >Ticker</label>
            <div class="mt-1 relative">
              <input
                id="wallet"
                v-model="ticker"
                type="text"
                name="wallet"
                autocomplete="off"
                placeholder="e.g. ETH"
                class="block w-full rounded-lg border-gray-700 bg-black bg-opacity-50 text-gray-100 placeholder-gray-600 shadow-sm focus:border-accent focus:ring-accent"
                @keydown.enter="add"
              >
            </div>
            <div
              v-if="suggestions.length"
              class="mt-2 flex flex-wrap gap-1.5 rounded-lg border border-gray-800 bg-black bg-opacity-40 p-2"
            >
              <button
                v-for="item in suggestions"
                :key="item.Symbol"
                type="button"
                class="inline-flex items-center rounded-md bg-gray-800 px-2.5 py-1 text-xs font-medium text-gray-200 hover:bg-gray-700 hover:text-white transition-colors"
                @click="pickSuggestion(item.Symbol)"
              >
                {{ item.Symbol }}
              </button>
            </div>
            <p v-if="isDuplicate" class="mt-2 text-sm text-accent-soft">
              Ticker already exists
            </p>
          </div>
          <button
            type="button"
            class="inline-flex flex-shrink-0 items-center justify-center gap-2 rounded-full bg-gray-100 px-5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-white focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-gray-900 transition-colors"
            @click="add"
          >
            <svg
              class="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
              />
            </svg>
            Add {{ ticker || "…" }}
          </button>
        </div>

        <template v-if="tickers.length">
          <hr class="border-gray-800">
          <dl class="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div
              v-for="t in tickers"
              :key="t.name"
              role="button"
              tabindex="0"
              class="group overflow-hidden rounded-xl border border-gray-800 bg-black bg-opacity-30 transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-black"
              :class="
                sel === t
                  ? 'border-accent ring-2 ring-accent ring-opacity-50 shadow-accent-glow'
                  : 'hover:border-gray-600'
              "
              @click="select(t)"
              @keydown.enter.prevent="select(t)"
            >
              <div class="px-4 py-5 text-center sm:px-5">
                <dt class="truncate text-xs font-medium uppercase tracking-wider text-gray-500">
                  {{ t.name }} · RUB
                </dt>
                <dd class="mt-2 text-2xl font-semibold tracking-tight text-gray-50 tabular-nums">
                  {{ formatPrice(t.price) }}
                </dd>
              </div>
              <div class="border-t border-gray-800" />
              <button
                type="button"
                class="flex w-full items-center justify-center gap-2 bg-black bg-opacity-40 px-4 py-3 text-sm font-medium text-gray-400 transition-colors hover:bg-red-900 hover:bg-opacity-30 hover:text-red-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-600 focus:ring-opacity-50"
                @click.stop="handleDelete(t)"
              >
                <svg
                  class="h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                    clip-rule="evenodd"
                  />
                </svg>
                Remove
              </button>
            </div>
          </dl>
        </template>

        <section v-if="sel" class="relative pt-2">
          <h3 class="mb-4 text-base font-medium text-gray-300">
            {{ sel.name }} · RUB
          </h3>
          <div
            class="flex h-56 items-end gap-0.5 overflow-x-auto rounded-lg border border-gray-800 bg-black bg-opacity-40 px-2 pb-2 pt-4"
          >
            <div
              v-for="(bar, idx) in graph"
              :key="idx"
              class="flex min-w-0 flex-1 flex-col justify-end"
            >
              <div
                class="rounded-t-sm bg-gradient-to-t from-pink-700 to-pink-400 transition-all"
                :style="{ height: barHeight(bar) + '%' }"
              />
            </div>
          </div>
          <p
            v-if="!graph.length"
            class="absolute inset-0 flex items-center justify-center text-sm text-gray-500 pointer-events-none"
          >
            Collecting ticks…
          </p>
          <button
            type="button"
            class="absolute right-0 top-0 rounded-lg p-2 text-gray-500 transition-colors hover:bg-gray-800 hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-accent"
            aria-label="Close chart"
            @click="sel = null"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="h-5 w-5"
            >
              <path
                d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"
              />
            </svg>
          </button>
        </section>
      </div>
    </div>
  </section>
</template>

<script>
const DEMO_SYMBOLS = [
  "BTC",
  "ETH",
  "SOL",
  "ADA",
  "DOT",
  "XRP",
  "DOGE",
  "AVAX",
  "LINK",
  "MATIC",
].map((Symbol) => ({ Symbol }));

function useDemoData() {
  return process.env.VUE_APP_DEMO !== "false";
}

function randomAround(value, spread) {
  const delta = (Math.random() - 0.5) * 2 * spread;
  return Math.max(0, value + delta);
}

export default {
  name: "Bitcoin",
  data() {
    return {
      useDemoData: useDemoData(),
      ticker: "",
      tickers: [],
      sel: null,
      graph: [],
      isDuplicate: false,
      spinner: false,
      coinlist: [],
      suggestions: [],
      demoTimer: null,
      liveTimers: [],
    };
  },

  watch: {
    ticker() {
      this.isDuplicate = false;
      const q = this.ticker.trim().toUpperCase();
      if (!q) {
        this.suggestions = [];
        return;
      }
      this.suggestions = this.coinlist
        .filter((i) => i.Symbol && i.Symbol.includes(q))
        .slice(0, 6);
    },
  },

  created() {
    if (this.useDemoData) {
      this.coinlist = DEMO_SYMBOLS;
      this.tickers = [
        { name: "BTC", price: 6420000 },
        { name: "ETH", price: 228400 },
        { name: "SOL", price: 12850 },
      ];
      return;
    }

    this.spinner = true;
    fetch("https://min-api.cryptocompare.com/data/all/coinlist?summary=true")
      .then((res) => res.json())
      .then((data) => {
        this.coinlist = Object.values(data.Data || {});
      })
      .finally(() => {
        this.spinner = false;
      });
  },

  mounted() {
    if (!this.useDemoData) return;
    this.demoTimer = setInterval(() => {
      this.tickers.forEach((t) => {
        const base = typeof t.price === "number" ? t.price : Number(t.price) || 1;
        t.price = randomAround(base, base * 0.004);
      });
      if (this.sel) {
        const v =
          typeof this.sel.price === "number"
            ? this.sel.price
            : Number(this.sel.price);
        if (!Number.isNaN(v)) {
          this.graph.push(v);
          if (this.graph.length > 48) this.graph.shift();
        }
      }
    }, 2500);
  },

  beforeDestroy() {
    if (this.demoTimer) clearInterval(this.demoTimer);
    this.liveTimers.forEach(clearInterval);
  },

  methods: {
    formatPrice(price) {
      if (price === "-" || price === undefined || price === null) return "—";
      const n = typeof price === "number" ? price : Number(price);
      if (Number.isNaN(n)) return String(price);
      return Math.round(n).toLocaleString("ru-RU");
    },

    pickSuggestion(symbol) {
      this.ticker = symbol;
      this.add();
    },

    add() {
      const name = this.ticker.trim().toUpperCase();
      if (!name) return;

      const currentTicker = {
        name,
        price: this.useDemoData ? 50000 + Math.random() * 500000 : "-",
      };

      if (this.tickers.some((tr) => tr.name === name)) {
        this.isDuplicate = true;
        return;
      }

      this.tickers.push(currentTicker);
      this.ticker = "";
      this.suggestions = [];

      if (this.useDemoData) return;

      const id = setInterval(async () => {
        try {
          const f = await fetch(
            `https://min-api.cryptocompare.com/data/price?fsym=${currentTicker.name}&tsyms=RUB&api_key=bbd08b2174fbf89d7a30accd74e56faeb12223ef8b3de8b175d090b1ff501c32`
          );
          const data = await f.json();
          currentTicker.price = data.RUB;

          if (this.sel && this.sel.name === currentTicker.name) {
            this.graph.push(currentTicker.price);
            if (this.graph.length > 48) this.graph.shift();
          }
        } catch (e) {
          /* ignore for live mode walkthrough */
        }
      }, 3000);
      this.liveTimers.push(id);
    },

    handleDelete(tickerToRemove) {
      this.tickers = this.tickers.filter((t) => t !== tickerToRemove);
      if (this.sel === tickerToRemove) {
        this.sel = null;
        this.graph = [];
      }
    },

    select(ticker) {
      this.sel = ticker;
      this.graph = [];
    },

    barHeight(val) {
      if (!this.graph.length) return 0;
      const nums = this.graph.map((x) => Number(x)).filter((x) => !Number.isNaN(x));
      if (!nums.length) return 0;
      const maxVal = Math.max(...nums);
      const minVal = Math.min(...nums);
      const v = Number(val);
      if (Number.isNaN(v)) return 5;
      if (maxVal === minVal) return 50;
      return 8 + ((v - minVal) * 84) / (maxVal - minVal);
    },
  },
};
</script>
