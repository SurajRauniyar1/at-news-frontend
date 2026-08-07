import { Bookmark } from "lucide-react";
import { toast } from "sonner";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
    addBookmark,
    removeBookmark,
} from "@/services/bookmarkService";

interface Props {
    articleId: number;
    bookmarked: boolean;
}

export default function BookmarkButton({
    articleId,
    bookmarked,
}: Props) {

    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: async (shouldRemove: boolean) => {
            if (shouldRemove) {
                return removeBookmark(articleId);
            }

            return addBookmark(articleId);
        },

        onSuccess: async () => {

    await queryClient.refetchQueries({
        queryKey: ["bookmarks"],
    });

},

        onError(error: any) {
            if (error.response?.status === 409) {
                toast.info("Already bookmarked");
            } else {
                toast.error("Operation failed");
            }
        },
    });

    return (
     <button
    type="button"
     disabled={mutation.isPending}
    onClick={() => {

        

        mutation.mutate(bookmarked);

    }}
>
            <Bookmark
                size={20}
                fill={bookmarked ? "currentColor" : "none"}
                className={
                    bookmarked
                        ? "text-blue-600"
                        : "text-slate-500"
                }
            />
        </button>
    );
}