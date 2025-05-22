import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

interface UserCardProps {
  name : string
  role?: string 
  avatarUrl?: string
  email?: string
  tasksCompleted?: number
  tasksInProgress?: number
}

export default function UserCard({
  name,
  role,
  avatarUrl,
  email,
  tasksCompleted = 0,
  tasksInProgress = 0,
}: UserCardProps) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()

  return (
    <>
    <Card className="w-[350px]">
      <CardHeader className="flex flex-row items-center gap-4">
        <Avatar className="h-16 w-16">
          <AvatarImage src={avatarUrl} alt={name} />
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-sm text-muted-foreground">{email}</p>
          <Badge variant="secondary" className="mt-1 w-fit">
            {role}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col items-center rounded-lg border p-3">
            <span className="text-2xl font-bold">{tasksCompleted}</span>
            <span className="text-sm text-muted-foreground">Completed</span>
          </div>
          <div className="flex flex-col items-center rounded-lg border p-3">
            <span className="text-2xl font-bold">{tasksInProgress}</span>
            <span className="text-sm text-muted-foreground">In Progress</span>
          </div>
        </div>
      </CardContent>
    </Card>
    </>
  )
}
