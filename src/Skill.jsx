import { getImageUrl } from "./utils"

function Skill() {
    let skill = [
        {
            id: 1,
            name: "NodeJS",
            imageSrc: "icon/node.png"
        },
        {
            id: 2,
            name: "Golang",
            imageSrc: "icon/go.png"
        },
        {
            id: 3,
            name: "PostgreSQL",
            imageSrc: "icon/postgresql.png"
        }
    ]
    return (
        <div className="grid grid-cols-4 gap-4">
            {
                skill.map(obj => {
                    return (
                        <div className="content-center" key={obj.id}>
                            {/* <h2 className="text-conter">{obj.name}</h2> */}
                            <img className="content-center h-20" src={getImageUrl(obj.imageSrc)} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Skill