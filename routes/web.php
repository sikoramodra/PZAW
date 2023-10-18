<?php

use App\Models\Publication;
use Illuminate\Support\Facades\Route;

// https://tinyurl.com/bdfra6pc

Route::get('/', function(){
    return view('home', [
        'date' => now(),
    ]);
})->name('home');

Route::get('/about-us', function(){
    return view('about_us');
})->name('about_us');


$publications = [
    new Publication([
        'title' => 'Introduction to GNU/Linux',
        'content' => 'This publication provides an in-depth overview of the GNU/Linux operating system. It covers topics such as the history of GNU/Linux, its architecture, file system, package management, and more. Additionally, it explores the various distributions available and their respective strengths. Whether you are a beginner or an experienced user, this publication is a valuable resource for understanding the core concepts of GNU/Linux.',
        'author' => 'Alex Johnson'
    ]),
    new Publication([
        'title' => 'Command Line Essentials in GNU/Linux',
        'content' => 'In this comprehensive guide, you will learn the fundamental command line tools and techniques in GNU/Linux. The content includes practical examples and exercises to help you gain proficiency in using the command line interface. Topics covered include file management, process control, text processing, and more. By the end of this publication, you will have a solid foundation in navigating and utilizing the command line in GNU/Linux.',
        'author' => 'Sarah Williams'
    ]),
    new Publication([
        'title' => 'Managing Services in GNU/Linux',
        'content' => 'This publication covers how to effectively manage services and daemons in a GNU/Linux system. It provides step-by-step instructions for tasks such as starting, stopping, and restarting services. Additionally, it discusses advanced topics like service dependencies and configuration management. Whether you are a system administrator or an enthusiast, this guide will equip you with the knowledge and skills to efficiently manage services in GNU/Linux.',
        'author' => 'Michael Brown'
    ]),
    new Publication([
        'title' => 'GNU/Linux Security Best Practices',
        'content' => 'Explore a comprehensive set of best practices for securing your GNU/Linux system against common threats. This publication delves into topics such as user authentication, firewall configuration, intrusion detection, and more. It also provides practical tips for maintaining a secure system over time. By following these guidelines, you can significantly enhance the security posture of your GNU/Linux environment.',
        'author' => 'Jessica Davis'
    ]),
    new Publication([
        'title' => 'Customizing Desktop Environments in GNU/Linux',
        'content' => 'Learn how to personalize and enhance your desktop experience in GNU/Linux. This guide covers a wide range of customization options, including themes, icons, desktop environments, and window managers. It also provides tips for optimizing system performance while customizing the desktop. Whether you prefer a sleek and minimalistic setup or a vibrant and feature-rich environment, this publication will help you achieve the perfect desktop configuration in GNU/Linux.',
        'author' => 'David Wilson'
    ])
];


Route::get('/publications', function() use($publications){
    return view('index', [
        'publications' => $publications
    ]);
})->name('publications');

Route::get('/publications/{id}', function($id) use ($publications) {
   return view('show', [
       'publication' => $publications[$id]
   ]);
})->name('publication');


$quotes = [
    1 => [
        'quote' => 'You were a boulder... I am a mountain.',
        'hero' => 'Sage',
        'role' => 'Sentinel',
        'image' => 'https://static.wikia.nocookie.net/valorant/images/7/74/Sage_icon.png',
    ],
    2 => [
        'quote' => 'Racing to the spike side!',
        'hero' => 'Jett',
        'role' => 'Duelist',
        'image' => 'https://static.wikia.nocookie.net/valorant/images/3/35/Jett_icon.png',
    ],
    3 => [
        'quote' => 'Call me tech support again.',
        'hero' => 'Killjoy',
        'role' => 'Sentinel',
        'image' => 'https://static.wikia.nocookie.net/valorant/images/1/15/Killjoy_icon.png',
    ],
    4 => [
        'quote' => 'One of my cameras is broken!... oh wait... it\'s fine.',
        'hero' => 'Cypher',
        'role' => 'Sentinel',
        'image' => 'https://static.wikia.nocookie.net/valorant/images/8/88/Cypher_icon.png',
    ],
    5 => [
        'quote' => 'I am the beggining. I am the end.',
        'hero' => 'Omen',
        'role' => 'Controller',
        'image' => 'https://static.wikia.nocookie.net/valorant/images/b/b0/Omen_icon.png',
    ],
];

Route::get('quotes/list', function() use($quotes) {
    return view('quotes', [
        'quotes' => $quotes
    ]);
})->name('quotes');

