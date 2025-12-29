import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
export default function JobTable() {
    return (
        <Table>
            <TableCaption>A list of your job list.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">NO</TableHead>
                    <TableHead>RS No.</TableHead>
                    <TableHead>RM No.</TableHead>
                    <TableHead>Branch/Department</TableHead>
                    <TableHead>Requested by/Assignee</TableHead>
                    <TableHead>Item Description</TableHead>
                    <TableHead>Item ID</TableHead>
                    <TableHead>Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableBody>
        </Table>
    );
}
