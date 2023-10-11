@props([
    'route',
    'icon',
    'name'
])

<li>
    <a href="{{ route($route) }}" class="flex">
        <i data-feather="{{ $icon }}"></i>
        <p>{{ $name }}</p>
    </a>
</li>
