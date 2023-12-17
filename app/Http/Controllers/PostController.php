<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

/*class PostController extends Controller
{
    public function index()
    {
        $posts = Post::where('is_published', 1)->get();
       foreach ($posts as $post) {
           echo $post->title . '<br>';
       }
        dd($posts);
    }

    public function create()
    {
        $postsArr = [
            [
                'title' => 'First post',
                'content' => 'First post content',
                'image' => 'https://picsum.photos/200/300',
                'likes' => 10,
                'is_published' => 1,
            ],
            [
                'title' => 'Second post',
                'content' => 'Second post content',
                'image' => 'https://picsum.photos/200/300',
                'likes' => 20,
                'is_published' => 1,
            ],

        ];

        foreach ($postsArr as $post) {

            Post::create($post);
        }
        dd('Posts created successfully!');
    }

    public function update()
    {
        $post = Post::find(1);
        $post->update([
            'title' => 'Updated title',
            'content' => 'Updated content',
            'image' => 'https://picsum.photos/200/300',
            'likes' => 20,
            'is_published' => 1,
        ]);
    }
}
*/
