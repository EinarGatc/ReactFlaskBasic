from flask import Flask, request, jsonify
from document_data import get_documents, get_data_from_json
from Assignment3.query import find_query
import time
app = Flask(__name__)
filepath_index = "/Users/egatchal/Desktop/Projects/index_data/index.txt"
filepath_index_list = "/Users/egatchal/Desktop/Projects/index_data/index_list.txt"
query_data= {}
# members API Route
@app.route("/members")
def members():
    return {"members": ["Member1", "Member2", "Member3"]}

@app.route("/urls", methods=['POST'])
def urls():
    data = request.json
    # start_time = time.time()
    urls = find_query(data['query'], filepath_index, filepath_index_list)
    # end_time = time.time()
    # print(f"Query Time:", end_time-start_time)
    query_data = {"urls": urls}

    return jsonify(query_data)
# def urls(query):
#     data = request.json
#     print(data)
#     urls = find_query(data['query'], filepath_index, filepath_index_list)
#     queries = {"urls": urls}
#     return queries

# @app.route("/query")
# def query():
#     data = request.json
#     urls = find_query(data['query'], filepath_index, filepath_index_list)
#     query_data = {"urls": urls}
#     return jsonify(query_data)

if __name__ == "__main__":
    app.run(debug=True)