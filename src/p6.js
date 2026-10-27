// reference (convert char to ASCII range are huge - bigger than 8bit, mandarin character (with 3 char size) also working): https://gist.github.com/codewithpom/ba1385c413147cd49f36197d57a42e9f
// reference (convert char code back into character) : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode

class Record {
    record = new Map();
    Record () {
        
    }

    found(charCode) {
        const count = this.record.get(charCode);

        if (typeof count == "number") {
            // means this charCode have previous records
            this.record.set(charCode, count + 1);
        } else {
            // means the count is currently "undifined"
            // no previous record

            this.record.set(charCode, 1); // initial count to 1
        }
    }

    // private helper function to print pretty table
    prettyTable(col1, col2) {
        return `${col1}\t${col2}\n`;
    }

    toString() {
        var str = "";

        // header
        str = str.concat(this.prettyTable("Character", "Count"));

        // map forEach -> (value, key)
        this.record.forEach((count, code) => {
            const character = String.fromCharCode(code); // turn charcode back into character

            str = str.concat(this.prettyTable(character, count));
        });

        return str;
    }

}

export function charCounter(str) {
    var record = new Record(); // manage and hold all the records
    
    for (var i = 0; i < str.length; i++) { // iter each character
        record.found(str.charCodeAt(i)); // just let record.found do the rest of the jobs
    }

    return record.toString();
}