import api from './api';

const AlbumService = {
  index: () => api.get('/dashboard')
}

export default AlbumService;