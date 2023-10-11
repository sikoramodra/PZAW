@props([
    'quote',
    'name',
    'role',
    'img'
])

<figure class="p-4 rounded-xl bg-gray-400 dark:bg-gray-500">
    <img src="{{ $img }}" alt="author" class="w-40 h-40 rounded-xl border-2 bg-gray-300 border-black dark:bg-gray-700 dark:border-white">
    <div>
        <figcaption>
            <p class="font-bold font-lg">{{ $name }}</p>
            <p class="italic underline">{{ $role }}</p>
        </figcaption>
        <blockquote class="font-light font-sm max-w-xs">{{ $quote }}</blockquote>
    </div>
</figure>
