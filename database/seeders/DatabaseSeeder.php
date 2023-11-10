<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Publication;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        $testUser = User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
        ]);


        Publication::create([
            'title' => 'Advanced Networking in GNU/Linux',
            'content' => 'Dive into the intricacies of networking in GNU/Linux with this advanced guide. It covers topics such as IP addressing, routing, VLANs, and network troubleshooting. Additionally, it explores advanced networking protocols and services like VPNs and DNS. Whether you are a network administrator or a seasoned GNU/Linux user, this publication will equip you with the knowledge and skills to handle complex networking scenarios.',
            'author_id' => $testUser->id,
        ]);

        Publication::create([
            'title' => 'Containerization with Docker in GNU/Linux',
            'content' => 'Explore the world of containerization using Docker in the GNU/Linux environment. This guide provides a hands-on approach to creating, deploying, and managing containers. It covers topics like Docker images, containers, and Docker Compose for multi-container applications. Whether you are a developer or an administrator, this publication will help you leverage the power of Docker for efficient application deployment.',
            'author_id' => $testUser->id,
        ]);

        Publication::create([
            'title' => 'Data Backup and Recovery in GNU/Linux',
            'content' => 'Protect your data with effective backup and recovery strategies in GNU/Linux. This guide provides step-by-step instructions for setting up automated backups, both locally and in the cloud. It covers tools like rsync, tar, and cloud storage services for secure data storage. Additionally, it offers insights into disaster recovery planning. By following the practices outlined in this publication, you can ensure the safety and availability of your critical data in GNU/Linux.',
            'author_id' => $testUser->id,
        ]);
    }
}
