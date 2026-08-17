// Lightweight SWR-like Client Cache Engine
const memoryCache = new Map<string, { data: any; expiresAt: number }>();

export const cache = {
  get<T>(key: string): T | null {
    // 1. Memory Cache lookup
    const mem = memoryCache.get(key);
    if (mem && mem.expiresAt > Date.now()) {
      return mem.data as T;
    }

    // 2. LocalStorage Cache lookup
    if (typeof window !== "undefined") {
      try {
        const raw = localStorage.getItem(`gym_cache_${key}`);
        if (raw) {
          const parsed = JSON.parse(raw);
          if (parsed.expiresAt > Date.now()) {
            memoryCache.set(key, parsed);
            return parsed.data as T;
          } else {
            localStorage.removeItem(`gym_cache_${key}`);
          }
        }
      } catch {
        // Ignore JSON or localStorage access errors
      }
    }
    return null;
  },

  set<T>(key: string, data: T, ttlSeconds: number = 3600): void {
    const expiresAt = Date.now() + ttlSeconds * 1000;
    const entry = { data, expiresAt };

    memoryCache.set(key, entry);

    if (typeof window !== "undefined") {
      try {
        localStorage.setItem(`gym_cache_${key}`, JSON.stringify(entry));
      } catch {
        // Handle localStorage quota or permission limits
      }
    }
  },

  clear(key: string): void {
    memoryCache.delete(key);
    if (typeof window !== "undefined") {
      try {
        localStorage.removeItem(`gym_cache_${key}`);
      } catch {
        // Ignore storage errors
      }
    }
  },
};
