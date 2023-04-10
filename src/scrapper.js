function scrapeData({ config, key }) {
  console.log(config, 'config')
  const result = []
  cards.forEach((card) => {
    let obj = {}
    const isVerified = card.querySelector(config?.isVerified)?.innerText
    const peopleUsed = card.querySelector(config?.peopleUsed)?.innerText
    const heading = card.querySelector(config?.heading)?.innerText
    const description = card.querySelector(config?.description).innerText

    let detailsList = []
    const details = card.querySelector(config.details)
    if(details) details.childNodes.forEach((item) => detailsList.push(item.innerText))
    detailsList = detailsList.filter(Boolean)
    obj = Object.assign(obj, {
      heading,
      description,
      isVerified,
      detailsList,
      peopleUsed: +peopleUsed?.split(" ")[0]
        ? +peopleUsed?.split(" ")[0]
        : "null",
    })
    result.push(obj)
  })
  return result
}
