"use client"
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";


interface igpostsdataschema {
  imageurl: string | null;
  caption: string | null;
  tags: string[] | null;
  postid: number;
  imagepromt: string | null;
}

const ManageIgPosts = ({ data }: { data: igpostsdataschema[] }) => {
  const router = useRouter();

  function onDelete(postId: number) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    alert(postId)
    console.log("YOOOOOOOOOO", postId)
  }

  function onEdit(postId: number) {
    router.push(`/ig/manage/${postId}`)
  }
  return (
    <div className="grid justify-items-center grid-cols-1 mx-auto gap-4 md:grid-cols-3">
      {data.map((igpost) => {
        return (
          <div className="max-w-md rounded overflow-hidden shadow-lg" key={igpost.postid}>
            <img className="w-full" src={`data:image/png;base64, ${igpost.imageurl}`} alt="Sunset in the mountains" />
            <div className="px-6 py-4">
              <p className="text-gray-700 text-base">
                {igpost.caption}
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              {igpost.tags?.map((tag) => {
                return (<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{tag}</span>)
              })}
            </div>
            <hr />
            <div className="flex justify-center gap-2 mx-2 my-4">
              <Button variant="secondary" onClick={() => onEdit(igpost.postid)}>AI Edit</Button>
              <Button variant="destructive" onClick={() => onDelete(igpost.postid)}>Delete</Button>
            </div>
          </div>
        )
      })}
    </div>

  )
}

export default ManageIgPosts