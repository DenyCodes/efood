class Restaurant {
  title: string
  category: string
  system: string
  description: string
  infos: string[]
  image: string
  id: number

  constructor(
    id: number,
    category: string,
    title: string,
    description: string,
    infos: string[],
    image: string,
    system: string
  ) {
    this.id = id
    this.category = category
    this.title = title
    this.description = description
    this.infos = infos
    this.image = image
    this.system = system
  }
}

export default Restaurant
