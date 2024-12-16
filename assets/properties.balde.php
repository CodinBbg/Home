<!-- resources/views/properties.blade.php -->

@extends('layouts.app')

@section('content')
  <h1>Available Properties</h1>
  <div class="property-list">
    @foreach($properties as $property)
      <div class="property-item">
        <img src="{{ $property->image }}" alt="{{ $property->title }}">
        <h3>{{ $property->title }}</h3>
        <p>{{ $property->description }}</p>
        <p>Price: ${{ $property->price }}</p>
      </div>
    @endforeach
  </div>
@endsection
