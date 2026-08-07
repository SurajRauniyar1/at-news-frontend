const categories = [
    "All",
    "Technology",
    "Business",
    "Sports",
    "Health",
    "Science",
    "Entertainment",
    "Politics",
];

interface Props {
    selected: string;
    onSelect: (category: string) => void;
}

export default function CategoryBar({
    selected,
    onSelect,
}: Props) {
    return (
        <div className="mb-8 flex gap-3 overflow-x-auto pb-2">
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => onSelect(category)}
                    className={`rounded-full px-5 py-2 whitespace-nowrap transition ${
                        selected === category
                            ? "bg-blue-600 text-white"
                            : "bg-white border hover:bg-slate-100"
                    }`}
                >
                    {category}
                </button>
            ))}
        </div>
    );
}