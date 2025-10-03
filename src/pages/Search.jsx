import { useSearchParams } from "react-router-dom";
import { useFetch } from "../hook/index";
import { useTitle } from "../hook/index";
import { Card } from "../components";

export const Search = ({apiPath}) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");
  const { data: movies } = useFetch(apiPath, queryTerm);

  useTitle(`Search result for ${queryTerm}`);

  return (
    <main>
      <section className="py-7">
        <p className="text-3xl text-gray-700 dark:text-white">{ movies.length === 0 ? `No result found for '${queryTerm}'` : `Result for '${queryTerm}'` }</p>
      </section>
      <section className="max-w-7xl mx-auto">
        <div className="flex justify-start flex-wrap space-x-4 space-y-4">       
          { movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          )) }          
        </div>
      </section>
    </main>
  )
}