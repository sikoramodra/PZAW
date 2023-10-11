@props([
    'quote',
    'name',
    'role',
    'img'
])

<figure class="p-4 rounded-xl dark:bg-dark-400 shadow dark:shadow-dark-400 bg-dark-500 shadow-dark-500">
    <img src="{{ $img }}" alt="author" class="w-40 h-40 rounded-xl border-2 bg-dark-200 border-black dark:bg-gray-700 dark:border-white">
    <div>
        <figcaption>
            <p class="font-bold text-xl">{{ $name }}</p>
            <p class="italic underline text-sm">{{ $role }}</p>
        </figcaption>
        <blockquote class="max-w-xs">{{ $quote }}</blockquote>
    </div>
</figure>
