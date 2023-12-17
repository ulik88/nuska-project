<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class DeskResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
       return [
           'id' => $this->id,
           'title' => $this->title,
           'description' => $this->description,
           'created_at' => $this->created_at,
           'lists' => ListRecource::collection($this->lists),
       ];
    }
}
