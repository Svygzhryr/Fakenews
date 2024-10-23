export interface Posts {
  id: string;
  title: string;
  text: string;
  createdDate: string | Date;
}

export interface PostDto {
  title: string;
  text: string;
}
