import { useQuery } from "@tanstack/react-query";
import { getHistory } from "@/services/historyService";

export default function useHistory() {
    return useQuery({
        queryKey: ["history"],
        queryFn: getHistory,
    });
}