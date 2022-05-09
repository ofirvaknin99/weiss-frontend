import { Injectable } from "@angular/core";
import axios from 'axios';
import { mediaPaths, serverUrl } from 'src/app/config';

@Injectable()
export class MediaService {
  constructor() { }


  async getMedias(mediaName: string) {
    return axios.get(`${serverUrl}${mediaPaths.movieDetails}/${mediaName}`);
  }

  async getFullMediaDetails(mediaId: string) {
    return axios.get(`${serverUrl}${mediaPaths.getFullMediaDetails}/${mediaId}`);
  }
}

