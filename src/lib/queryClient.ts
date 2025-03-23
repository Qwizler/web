import type { QueryClientConfig } from "@tanstack/react-query";

export default function NewQueryClientConfig(): QueryClientConfig {
	const staleTime = import.meta.env.VITE_STALE_TIME
		? import.meta.env.VITE_STALE_TIME
		: 60;

	const config: QueryClientConfig = {
		defaultOptions: {
			queries: {
				staleTime: staleTime,
				gcTime: staleTime * 1000,
			},
		},
	};
	return config;
}
