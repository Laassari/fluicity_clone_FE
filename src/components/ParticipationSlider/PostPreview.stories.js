import React from 'react';
import PostPreview from './PostPreview';
import { BrowserRouter } from 'react-router-dom';

const postDetails = {
  title: 'Post title',
  author: 'Noureddine',
  excerpt:
    'Bienvenue sur le site collaboratif Vos Idées Vertes ! Votre rôle ?Partagez vos propositions concrètes, locales ...',
  category: 'News'
};

export const postPreviewWithDefaultImages = () => (
  <BrowserRouter>
    <PostPreview {...postDetails} />
  </BrowserRouter>
);

export const postPreviewWithImages = () => (
  <BrowserRouter>
    <PostPreview
      {...postDetails}
      image="https://i.pinimg.com/736x/88/e5/09/88e509368b2a101c9c76da1d7afec94d.jpg"
      userAvatar="https://avatarmaker.com/svgavatars/temp-avatars/svgA585867295337684.png"
    />
  </BrowserRouter>
);

export default {
  title: 'Post'
};
