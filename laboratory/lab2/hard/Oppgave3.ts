/*
    Oppgave 3: Rekursive typer
    I denne oppgaven skal du fokusere på å implementere en datastruktur som ligner
    på en trestruktur, samt en funksjon for å traversere den.
    Definer en interface eller type TreeNode som representerer en node i et tre.
    Hver node skal ha en value av hvilken som helst type og en array med childnodes (TreeNode) kalt children. 
    Lag et objekt av typen TreeNode med flere
    nivåer av nesting. Lag en funksjon traverseTree som tar et TreeNode-objekt
    som bruker en variant av BFS for å traversere treet og returnere en array med
    alle verdiene i treet.
*/








interface TreeNode<T> {
    value: T,
    children: TreeNode<T>[]
}

const root: TreeNode<number | string> = {
    value: '1',
    children: [
        {
            value: '2',
            children: [
                {
                    value: '3',
                    children: []
                },
                {
                    value: '4',
                    children: []
                }
            ]
        }
    ]
}

const traverse = <T>(node: TreeNode<T>): T[] => {
    return [node.value, ...node.children.flatMap(traverse)]
}


console.log(traverse)